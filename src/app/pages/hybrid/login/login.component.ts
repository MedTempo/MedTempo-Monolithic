import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usr

  constructor(private back: BackendConnectorService, private router: Router){
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

  public async Login($event: NgForm,){
    console.log($event.value)

    this.usr = $event.value

    console.log(this.usr)

    console.log(`is valid ${$event.valid}`)


    if($event.valid){
      let req = await this.back.create(this.usr, `login`)


      await req.subscribe((res: any)=>{
        console.log(res)
      })
  
      console.log(req)
      //this.router.navigate([`/app`])
    }
    else{
      alert(`formulario não é valido`)
    }

  }
}
