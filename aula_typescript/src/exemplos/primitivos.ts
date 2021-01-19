export function exemploTipos() {
  const numero: number = 5;
  const nome: string = 'Alvaro';
  const ehHumano: boolean = true;

  console.log('O número eh ' + numero.toString());
  console.log('O nome eh ' + nome);
  console.log('Ele eh humano?' + ehHumano);

  console.log(`O nome eh ${nome}`);
  
}

export function exemploIfLoop() {
  let contador = 0;

  while (contador <= 5) {
    let nome = 'Alvaro';
    if (contador === 2) {
      console.log('Chegou ao dois');
    } else {
      console.log('Não chegou');
    }
    console.log('Contador ' + contador);
    contador++;
  }
}
