export abstract class AbstractAnimal implements IAnimal {
  protected _nom: string;
  static nbAnimal = 0;
  abstract manger(): string;
  constructor() {
    AbstractAnimal.nbAnimal += 1;
  }
  respirer(): boolean {
    return true;
  }
  set nom(nom: string) {
    this._nom = nom;
  }
}
