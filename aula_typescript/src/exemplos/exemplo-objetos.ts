export function filtraAlunoPorNota(turma: Alunos, nota = 10): Alunos {
  return turma.filter((item) => item.nota === nota);
}

export interface Aluno {
  nome: string;
  nota: number;
}


export interface Professor {
  nome?: string;
  materia?: string;
  ehLegal: Function;
}

export interface Turma {
  professor : Professor;
  alunos : Alunos; //array de alunos
}

export type Alunos = Array<Aluno>;



export function ImprimeTurma(turma: Turma){
  console.log('Turma eh composta pelo');
  //console.log('Professor' + turma.professor.nome);
  console.log('Professor ' + 1 + ' - ' + turma?.professor?.nome); //o interrogacao chama safe navegator, server pra nao dar erro caso nao exista a propriedade chamada. evita erro
  console.log(turma?.professor?.ehlegal())
 // console.log('alunos: ' + turma.alunos[1].nome);
}


export function mostraAluno() {
  const aluno1: Aluno = {
    nome: 'Ricardo',
    nota: 10,
  };
  const aluno3: Aluno = {
    nome: 'luigi',
    nota: 4,
  };

  /* let nome1 = 'luciana';
   let nome2 = nome1;
 
   nome2 = 'Elisa';
 
   console.log(nome1);
   console.log(nome2);
 
   const aluno2 = aluno1;
 
   aluno2.nome = 'mario';
 
 
 */

  const aluno2: Aluno = { ...aluno1, nota: 5, endereco: 'av paulista, 123' };

  console.log(aluno2);
  console.log(aluno1);

  imprimeNomeAluno(aluno3);
  const novoAluno = retornaAluno('Alvaro', '6');
  console.log('o novo aluno matriculado eh o ' + novoAluno.nome);

};


export function imprimeNomeAluno(aluno: Aluno) {
  const { nome, nota } = aluno;

  console.log('o nome do aluno eh ' + nome)
  console.log('a nota do aluno eh ' + nota)
}


export function retornaAluno(nome: string, nota: number): Aluno {

  const teste = { nome, nota };
  const textoAprovado = nota >= 7 ? 'Aluno aprovado' : 'Aluno reprovado';
  const lAprovado = nota >= 7 || nome === 'Alvaro';

  //-----------------------------------------------------------------
  // como o nome da propriedade é o mesmo da variavel, posso omitir
  //-----------------------------------------------------------------
  /* return {
     nome: nome,
     nota: nota,
   }*/

  console.log(textoAprovado);
  if (lAprovado) {
    console.log('passou de ano');
  } else {
    console.log('reprovou burrao');
  }

  return {
    nome: nome,
    nota: nota,
  }


}

export function estaAprovado(nota?: number) {
  //const notaAvaliada = nota ? nota : 100; //0 numa variavel numerica eh falso, nesse caso ele vai jogar a nota pro else, com valor 100
 // const notaAvaliada = nota != undefined || nota != undefined ? nota : 100;
  const notaAvaliada = nota ?? 100; //isso substitui o iif acima, ele ja faz um coalesce pra garantir o null e o undefined de uma só vez
  const textoNota = notaAvaliada > 7 ? 'Esta aprovado' : 'iiiii reprovado';
  console.log(notaAvaliada, textoNota);

}
