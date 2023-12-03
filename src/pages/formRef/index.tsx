import { ItemType } from '@app_types/itemType';
import { addItem, toggleHighlithning } from '@redux/itemSlice';
import { RootState, store } from '@redux/store';
import { convertBase64 } from '@utils/convertToBase64';
import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userFormSchemaType } from '@validation/formValidator';
import { ErrorsType, useYupValidationResolver } from '@hooks/useYupValidationResolver';
import { CustomInput } from '@components/form/customInput';
import classNames from './index.module.css';
import { CustomAutocompleteSelect } from '@components/form/customSelect/index';
import { CustomFileInput } from '@components/form/customFileInput';
import { CustomCheckboxInput } from '@components/form/customCheckbox';
import { useSelector } from 'react-redux';

export default function RefFormPage() {
  const countries = useSelector((state: RootState) => state.countries);
  const navigate = useNavigate();
  const validate = useYupValidationResolver();
  const [errors, setErrors] = useState<ErrorsType | undefined>();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Partial<userFormSchemaType> = {
      name: nameRef.current?.value,
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordConfirmation: passwordConfirmRef.current?.value,
      gender: genderRef.current?.value,
      picture: pictureRef.current?.files as FileList | undefined,
      country: countryRef.current?.value,
      accept: acceptRef.current?.checked,
    };
    const { errors } = await validate(data as Required<userFormSchemaType>);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const item: ItemType = { ...(data as Required<userFormSchemaType>), picture: '' };
      item.picture = await convertBase64(data.picture![0]);
      store.dispatch(addItem(item));
      store.dispatch(toggleHighlithning(true));
      setTimeout(() => store.dispatch(toggleHighlithning(false)), 5000);
      navigate('/');
    }
  };
  return (
    <section className={classNames.formWrapper}>
      <h3 className={classNames.formTitle}>React ref user form</h3>
      <form onSubmit={handleSubmit}>
        <section className={classNames.formDataWrapper}>
          <section>
            <CustomInput type="text" id="name" placeholder="name" label="Name" error={errors?.name} ref={nameRef} />
            <CustomInput type="number" id="age" placeholder="age" label="Age" error={errors?.age} ref={ageRef} />
            <CustomInput type="email" id="email" placeholder="email" label="Email" error={errors?.email} ref={emailRef} />
            <CustomInput type="password" id="password" placeholder="password" label="Password" error={errors?.password} ref={passwordRef} />
            <CustomInput
              type="password"
              id="passwordConfirmation"
              placeholder="password confirmation"
              label="Confirm password"
              error={errors?.passwordConfirmation}
              ref={passwordConfirmRef}
            />
          </section>
          <section className={classNames.rightWrapper}>
            <section>
              <CustomAutocompleteSelect
                elements={['male', 'female', 'other']}
                id="gender"
                placeholder="gender"
                label="Gender"
                error={errors?.gender}
                ref={genderRef}
              />
              <CustomAutocompleteSelect
                elements={countries}
                id="country"
                placeholder="country"
                label="Country"
                error={errors?.country}
                ref={countryRef}
              />
            </section>
            <CustomFileInput id="picture" label="Choose Picture" error={errors?.picture} ref={pictureRef} />
          </section>
        </section>
        <CustomCheckboxInput id="accept" label="Accept T&C" error={errors?.accept} ref={acceptRef} />
        <section className={classNames.submitButtonWrapper}>
          <button type="submit" formNoValidate>
            Отправить
          </button>
        </section>
      </form>
    </section>
  );
}
