import {httpConnection} from "utils/AxiosHttp";

interface UseLoginProps {
  email: string;
  password: string;
}

const useLogin = async ({ email, password }: UseLoginProps): Promise<boolean> => {
  try {
    const response = await httpConnection.post('/user/login', {email, password});

    if (response && response.status === 200) {
      localStorage.setItem('id', response.data._id)
      localStorage.setItem('token', response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default useLogin;
