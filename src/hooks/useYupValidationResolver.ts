import { useCallback } from 'react';
import { createUserFormSchema, userFormSchemaType } from '@validation/formValidator';
import { ValidationError } from 'yup';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
export type ErrorsType = {
  [Property in keyof userFormSchemaType]?: ValidationError;
};

export const useYupValidationResolver = () => {
  const countries = useSelector((state: RootState) => state.countries);
  const validationSchema = createUserFormSchema(countries);
  return useCallback(
    async (data: userFormSchemaType) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        if (errors instanceof ValidationError) {
          const resultErrors = {};
          errors.inner.forEach((error) => {
            if (!resultErrors[error.path as keyof typeof resultErrors]) {
              resultErrors[error.path as keyof typeof resultErrors] = error as never;
            }
          });
          return {
            values: {},
            errors: resultErrors,
          };
        } else {
          return {
            values: {},
            errors: {},
          };
        }
      }
    },
    [validationSchema]
  );
};
