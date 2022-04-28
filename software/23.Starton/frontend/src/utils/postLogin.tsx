import {httpConnection} from "utils/AxiosHttp";

interface PostLoginProps {
  email: string;
  password: string;
}

const postLogin = async ({ email, password }: PostLoginProps): Promise<boolean> => {
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

export default postLogin;
