import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdt-single-tab',
  templateUrl: './single-tab.component.html',
  styleUrls: ['./single-tab.component.scss']
})
export class SingleTabComponent {
  @Input() title: string = ``
  @Input() nome: string = ``
  @Input() icon: string = ``
  @Input() color: string = `light`

  constructor(){
    console.log(this.nome)
    console.log(this.icon)
    console.log(this.color)
  }
}
