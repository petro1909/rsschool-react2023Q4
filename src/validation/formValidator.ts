import { object, string, number, ref, boolean, mixed, InferType } from 'yup';

export const createUserFormSchema = (countries: string[]) => {
  return object({
    name: string()
      .required('name is required')
      .matches(/^[A-Z]/, 'first letter should be uppercase'),
    age: number()
      .typeError('age must be a number')
      .required('age is required')
      .integer('age must be integer number')
      .positive('age must be positive number'),
    email: string().required().email(),
    password: string().required('Required field password'),
    passwordConfirmation: string()
      .required()
      .oneOf([ref('password')], 'Passwords must match'),
    gender: string().required().oneOf(['male', 'female', 'other']),
    accept: boolean().required().oneOf([true], 'for submit should accept T&C'),
    picture: mixed<FileList>()
      .required('required')
      .test('picture existance test', 'picture is required', (pictureList) => pictureList.length !== 0)
      .test('picture extension test', 'extenion should be or png or jpeg', (pictureList) => {
        if (pictureList.length !== 0) {
          const picture = pictureList.item(0)!;
          const extension = picture.type.slice(picture.type.indexOf('/') + 1);
          return /(png|jpeg)/.test(extension);
        }
        return false;
      })
      .test('picture size test', 'size should be less then 5MB', (pictureList) => {
        if (pictureList.length !== 0) {
          return pictureList.item(0)!.size < 5 * 1024 * 1024;
        }
        return false;
      }),
    country: string().required().oneOf(countries, 'country must be one of suggested countries'),
  });
};

export const userFormSchema = createUserFormSchema([]);

export const passwordSchema = string()
  .required('Required field password')
  .matches(/[A-Z]/, 'Uppercase')
  .matches(/[a-z]/, 'LowwerCase')
  .matches(/[0-9]/, 'Numbers')
  .matches(/[@$!%*?&]/, 'Special charachters');

export type userFormSchemaType = InferType<typeof userFormSchema>;
