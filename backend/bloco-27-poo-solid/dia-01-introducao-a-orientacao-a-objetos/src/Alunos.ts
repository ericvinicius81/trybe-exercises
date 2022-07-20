// Exercício 1 e 2

class Alunos {
  private _matricula: number;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: number, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  get matricula(): number {
    return this._matricula;
  }

  set matricula(matricula: number) {
    this._matricula = matricula; 
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome; 
  }

  get notasProva(): number[] {
    return this._notasProva;
  }

  set notasProva(notas: number[]) {
    if (notas.length !== 4) {
      throw new Error('Devem existir 4 notas de prova')
    }
    this._notasProva = notas; 
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho(notas: number[]) {
    if (notas.length !== 2) {
      throw new Error('Devem existir 2 notas de prova')
    }
    this._notasTrabalho = notas; 
  }

  sum(): number {
    return [...this._notasProva, ...this._notasTrabalho]
      .reduce((previousNote, note) => {
        note += previousNote;

        return note;
      }, 0);
  }

  average(): number {
    const sum = this.sum();
    const divider = 6;
    return Math.round(sum / divider);
  }
}

const aluno1: Alunos = new Alunos(1, 'Eric Campos', [8, 7, 9, 6], [9, 8]);

console.table(aluno1);

aluno1.matricula = 548;
aluno1.nome = 'Fernando Pessoa';
aluno1.notasProva = [9, 10, 10, 10];
aluno1.notasTrabalho = [10, 10];

console.table(aluno1);

console.log(aluno1.sum());
console.log(aluno1.average());

