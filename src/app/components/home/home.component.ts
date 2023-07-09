import { Component } from '@angular/core';

import type medicamentos from 'src/interfaces/medicamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  arr_medicamentos: Array<medicamentos> = [
    {
      nome: `LOSARTRANA`,
      horario: Date(),
      dosagem: `1 Comprimido`
    },    
    {
      nome: `ASPIRINA`,
      horario: Date(),
      dosagem: `1 Comprimido`
    }

  ]
}
