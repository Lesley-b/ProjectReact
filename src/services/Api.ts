import axios, { AxiosInstance } from "axios";
import { API_URL } from "./urls";

export default class Api {

  client: AxiosInstance | null = null;

  //regresara un AxiosInstance (despues del :)
  init(): AxiosInstance{

    const headers = {
      Accept: 'application/json'
    }

    this.client = axios.create({
      baseURL: API_URL, 
      headers
    })

    return this.client;
  }
}