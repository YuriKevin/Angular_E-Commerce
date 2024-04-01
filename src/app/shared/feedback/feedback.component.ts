import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  show:boolean = false;
  mensagem:string = '';
  aparecerBotaoOk:boolean = false;
  open(mensagem:string, botaoOk:boolean){
    this.show = true;
    this.aparecerBotaoOk = botaoOk;
    this.mensagem = mensagem;
  }

  close(){
    this.show = false;
  }

}