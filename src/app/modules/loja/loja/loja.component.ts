import { Component, Input } from '@angular/core';
import { LojaDTO } from 'src/app/interfaces/loja-dto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {
  @Input() loja!: LojaDTO;
}
