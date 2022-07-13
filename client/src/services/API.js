import axios from "axios";

export const rotaPessoa = axios.create({
  baseURL: 'http://localhost:3333/pessoa',
});
export const rotaFatura = axios.create({
  baseURL: 'http://localhost:3333/fatura',
});
