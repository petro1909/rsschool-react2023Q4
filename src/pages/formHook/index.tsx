import { useNavigate } from 'react-router-dom';
import { userFormSchemaType } from '../../validation/formValidator';
import { useForm } from 'react-hook-form';
import { useYupValidationResolver } from '@hooks/useYupValidationResolver';
import { CustomInput } from '@components/form/customInput/index';
import { CustomFileInput } from '@components/form/customFileInput/index';
import { CustomAutocompleteSelect } from '@components/form/customSelect/index';
import { CustomCheckboxInput } from '@components/form/customCheckbox';
import classNames from './index.module.css';
import { CustomPasswordInput } from '@components/form/custopPasswordInput';
import { convertBase64 } from '@utils/convertToBase64';
import { RootState, store } from '@redux/store';
import { addItem, toggleHighlithning } from '@redux/itemSlice';
import { ItemType } from '@app_types/itemType';
import { useSelector } from 'react-redux';
export default function HookFormPage() {
  const countries = useSelector((state: RootState) => state.countries);
  const navigate = useNavigate();
  const resolver = useYupValidationResolver();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormSchemaType>({ resolver, mode: 'all' });

  const onSubmit = async (data: userFormSchemaType) => {
    const item: ItemType = { ...data, picture: '' };
    item.picture = await convertBase64(data.picture[0]!);
    store.dispatch(addItem(item));
    store.dispatch(toggleHighlithning(true));
    setTimeout(() => store.dispatch(toggleHighlithning(false)), 5000);
    navigate('/');
  };

  return (
    <section className={classNames.formWrapper}>
      <h3 className={classNames.formTitle}>React hook user form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={classNames.formDataWrapper}>
          <section>
            <CustomInput type="text" id="name" placeholder="name" label="Name" error={errors.name} {...register('name')} />
            <CustomInput type="number" id="age" placeholder="age" label="Age" error={errors.age} {...register('age')} />
            <CustomInput type="email" id="email" placeholder="email" label="Email" error={errors.email} {...register('email')} />
            <CustomPasswordInput id="password" placeholder="password" label="Password" error={errors.password} {...register('password')} />
            <CustomInput
              type="password"
              id="passwordConfirmation"
              placeholder="password confirmation"
              label="Confirm password"
              error={errors.passwordConfirmation}
              {...register('passwordConfirmation')}
            />
          </section>
          <section className={classNames.rightWrapper}>
            <section>
              <CustomAutocompleteSelect
                elements={['male', 'female', 'other']}
                id="gender"
                placeholder="gender"
                label="Gender"
                error={errors.gender}
                {...register('gender')}
              />
              <CustomAutocompleteSelect
                elements={countries}
                id="country"
                placeholder="country"
                label="Country"
                error={errors.country}
                {...register('country')}
              />
            </section>
            <CustomFileInput id="picture" label="Choose Picture" error={errors.picture} {...register('picture')} />
          </section>
        </section>
        <CustomCheckboxInput id="accept" label="Accept T&C" error={errors.accept} {...register('accept')} />
        <section className={classNames.submitButtonWrapper}>
          <button disabled={Object.keys(errors).length === 0 ? false : true} type="submit" formNoValidate>
            Отправить
          </button>
        </section>
      </form>
    </section>
  );
}
