import {
    buscaAlunoPorNota,
    listaDeAlunos,
    montaTurma,
    mostraArray,
    somaNotas,
    tirarPontoTurma,
} from './exemplos/arrays';
import { exemploIfLoop, exemploTipos } from './exemplos/primitivos';
import { estaAprovado, filtraAlunoPorNota, imprimeNomeAluno, ImprimeTurma, mostraAluno, Turma } from './exemplos/exemplo-objetos';
import { exercicioAulaTypeScript, mediaPreco } from './exemplos/exercicio';

const turma = montaTurma();

exercicioAulaTypeScript();

/*
console.log(filtraAlunoPorNota(turma));

exemploTipos();
mostraAluno();
mostraArray();
estaAprovado(10);
estaAprovado(0);
estaAprovado();



const turma2: Turma = {
    professor: {
        nome: "Ricardo",
        materia: 'programacao',
        ehlegal: () => 'eh sim',
    },

};

ImprimeTurma(turma2); // se chamasse sem criar o objeto professor na turma, se tiver safe operator dentro da imprime turma nao vai dar erro, só mostra undefined, se nao tiver ai dá erro na aplicacao



*/