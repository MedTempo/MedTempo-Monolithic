import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { OnInit } from '@angular/core';

import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';
import { req_user_pessoal, usuario_pessoal } from 'src/interfaces/usuarios';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  data?: any
  value?: Array<usuario_pessoal>

  constructor(public back: BackendConnectorService){

  }


  async ngOnInit() {
    this.data = await this.back.getData(`user-pessoal`)
    
    await this.data.subscribe((res: req_user_pessoal)=>{
      this.value = res.data.usuario_pessoal.values
      console.log(`bg`)

      console.log(this.value)
  
      console.log(`end`)
    })
  }

  async connect(){

  
    console.log(this.value)


   // console.log(this.data)


  }
}
