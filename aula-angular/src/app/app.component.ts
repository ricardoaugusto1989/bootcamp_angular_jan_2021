  
import { Component } from '@angular/core';
import { Alunos } from './alunos';

const URL = 'http://api.com';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Teste Angular';
  nome = 'Sobreescreve o nome do exemplo-angular';

  listagem: Alunos = [
    {nome:'Ricardo', dataNascimento : '1989-03-02'},
    {nome:'rafael', dataNascimento : '1996-12-18'}
  ];

  numero1 = 5;
  numero2 = 10;

  alertaTurma(turma:string){
    alert(`Turma ${turma} selecionada`);
  }



}
