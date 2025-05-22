import { CreateAxiosInstance } from './CreateAxiosInstance'

//basepath 값과 token값 보내기

//client token값
const clientapi = CreateAxiosInstance('/client', () =>
  localStorage.getItem('client-token')
);

export default clientapi;
