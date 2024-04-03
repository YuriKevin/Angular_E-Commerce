import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  paginacao:boolean = false;
  @Input() titulo!: string;
  
}