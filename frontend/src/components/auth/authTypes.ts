
export type AuthBaseFormData = {
    email: string;
    password: string;
  };
  
  export type SignupFormData = AuthBaseFormData & {
    name: string;
  };