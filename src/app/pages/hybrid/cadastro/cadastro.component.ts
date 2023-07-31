import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';
import { req_user_pessoal, usuario_pessoal } from 'src/interfaces/usuarios';

import { Router } from '@angular/router';
import usr_type from 'src/interfaces/usr_type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usr: usuario_pessoal

  usuarios?: Array<usuario_pessoal>

  usr_type: usr_type = 1

  constructor(private back: BackendConnectorService, private router: Router){
    this.usr = {
      "id": "",
      "data_criacao": Date(),
      "data_nascimento": Date(),
      "descricao": "",
      "email": "",
      "senha": "",
      "nome": "",
      "sexo": null,
      "sobrenome": ""
  }


  }

  public async ngOnInit() {
    let req = await this.back.getData(`user-pessoal`)

    await req.subscribe((res: any) => {
      this.usuarios = res.data.usuario_pessoal.values
    })
 
  }


  public async Create($event: NgForm, url: string){
    console.log(this.usuarios)
    console.log($event.value)

    this.usr = $event.value

    console.log(this.usr)

    console.log(`is valid ${$event.valid}`)


    if($event.valid){
      let req = await this.back.create(this.usr, url)


      await req.subscribe((res: any)=>{
        console.log(res)
      })
  
      console.log(req)
      this.router.navigate([`/login`])
    }
    else{
      alert(`formulario não é valido`)
    }

  }


  public async Delete(user: string){
    
  }
}
