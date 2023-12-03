export type FormData = {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirmation: string;
  gender: 'male' | 'female';
  acceptTC: boolean;
  picture: File;
  country: string;
};
