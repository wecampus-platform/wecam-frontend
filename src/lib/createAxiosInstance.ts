import axios, { AxiosInstance } from 'axios';

//axiosInstace를 생성하여 url에 따라(client or public or ..) token을 전송
export const CreateAxiosInstance = (
  basePath: string,
  getToken?: () => string | null
): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}${basePath}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(config => {
    const token = getToken?.();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};
