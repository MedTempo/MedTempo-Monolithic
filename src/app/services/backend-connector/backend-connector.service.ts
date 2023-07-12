import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario_pessoal } from 'src/interfaces/usuarios';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class BackendConnectorService {
  readonly api_url: string = isDevMode() ? `http://127.0.0.1:7777` : `https://med-tempo-back.deno.dev/`;

  constructor(private http_client: HttpClient) {}

  public async getData() {
    const data = await this.http_client.request(`GET`, this.api_url, {
      responseType: `json`,
    });

    //console.log(data)

    return data;
  }

  public async createUser(usr: usuario_pessoal) {
    const data = await this.http_client.request(
      `POST`,
      `${this.api_url}usuarios`,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        body: usr
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
