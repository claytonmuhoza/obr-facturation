export class Commentaire {
  id: number;
  comment: string;
  constructor(id: number, comment: string) {
    this.id = id;
    this.comment = comment;
  }
}

export const comments = [
  new Commentaire(1, "nice pice"),
  new Commentaire(2, "ko utagase?"),
];
