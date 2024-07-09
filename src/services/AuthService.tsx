import { handleError } from "@/lib/helpers/ErrorHandler";
import { UserProfileToken } from "@/types/models/User";
import axios from "axios";

export const api = "http://localhost:3000";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(`${api}/auth/login`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string,
  name: string
) => {
  try {
    console.log(email, username, password, name);

    const data = await axios.post<UserProfileToken>(`${api}/auth/register`, {
      email: email,
      username: username,
      name: name,
      password: password,
    });

    return data;
  } catch (error) {
    handleError(error);
  }
};
