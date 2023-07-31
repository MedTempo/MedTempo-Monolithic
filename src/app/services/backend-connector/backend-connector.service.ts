import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario_pessoal } from 'src/interfaces/usuarios';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class BackendConnectorService {
  readonly api_url: string = isDevMode() ? `http://127.0.0.1:7777/` : `https://medtempo-backend.onrender.com/`;

  constructor(private http_client: HttpClient) {}


  public async getData(complemento: string) {
    const data = await this.http_client.request(`GET`, `${this.api_url}${complemento}`, {
      responseType: `json`,
      withCredentials: true
    });

    //console.log(data)

    return data;
  }

  public async create(usr: usuario_pessoal, complemento: string) {
    const data = await this.http_client.request(
      `POST`,
      `${this.api_url}${complemento}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        body: usr,

      }
    )

      console.log(data)

    return data;
  }

  public async login(usr: usuario_pessoal, complemento: string) {
    const data = await this.http_client.request(
      `POST`,
      `${this.api_url}${complemento}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        body: usr,
        withCredentials: true

      }
    )

      console.log(data)

    return data;
  }

  public async deleteUser(usr: usuario_pessoal){
    const data = await this.http_client.request(
      `DELETE`,
      `${this.api_url}usuarios`,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        body: usr
      }
    )
  }
}
