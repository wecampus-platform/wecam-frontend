import { createAxiosInstance } from './createAxiosInstance'

//basepath 값과 token값 보내기

//client token값
const clientapi = createAxiosInstance('/client', () =>
  localStorage.getItem('client-token')
);

export default clientapi;
