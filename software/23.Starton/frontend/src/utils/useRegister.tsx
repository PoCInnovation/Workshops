import {httpConnection} from "utils/AxiosHttp";

interface UseRegisterProps {
  email: string;
  password: string;
  wallet: string;
}

const useRegister = async ({ email, password, wallet }: UseRegisterProps): Promise<boolean> => {
  try {
    const response = await httpConnection.put('/user/register', {email, password, wallet});
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default useRegister;