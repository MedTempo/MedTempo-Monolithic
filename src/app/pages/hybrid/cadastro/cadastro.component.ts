import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';
import { req_user_pessoal, usuario_pessoal } from 'src/interfaces/usuarios';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usr: usuario_pessoal

  usuarios?: Array<usuario_pessoal>

  constructor(private back: BackendConnectorService){
    this.usr = {
      "id": "",
      "data_criacao": Date(),
      "data_nascimento": Date(),
      "descricao": "",
      "email": "",
      "senha": "",
      "idade": 0,
      "nome": "",
      "sexo": null,
      "sobrenome": ""
  }


  }

  public async ngOnInit() {
    let req = await this.back.getData()

    await req.subscribe((res: any) => {
      this.usuarios = res.data.usuario_pessoal.values
    })
    
    
  }


  public async Create($event: NgForm){
    console.log(this.usuarios)
    console.log($event.value)

    this.usr = $event.value

    console.log(this.usr)

    console.log(`is valid ${$event.valid}`)


    let req = await this.back.createUser(this.usr)

    console.log(req)
  }


  public async Delete(user: string){
    
  }
}
