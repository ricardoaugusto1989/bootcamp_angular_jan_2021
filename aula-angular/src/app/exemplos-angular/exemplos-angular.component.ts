import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrls: ['./exemplos-angular.component.css']
})
export class ExemplosAngularComponent {
  @Input() //cria um input para a propriedade nomeAluno, que será sobreescrita. Existe o output (para funcoes). Pesquisar depois
  nomeAluno = 'Ricardo';
  turma = 'russia';
  exibeLista = false;

  @Input()
  listaAlunos!:Alunos;

  @Output()
  selecaoTurma = new EventEmitter<string>();
  /*
  atualizaTurma(turma:string | null){
    this.turma = turma ?? '';
  }*/

  atualizaTurma(input:any){
    this.turma = input.value;
    this.selecaoTurma.emit(this.turma);
    console.log(this.listaAlunos);
  }

  atualizaLista(){
    this.exibeLista = !this.exibeLista
  }
}
