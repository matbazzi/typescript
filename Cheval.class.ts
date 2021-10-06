import { AbstractAnimal } from './AbstractAnimal.class';
export class Cheval extends AbstractAnimal {
  constructor() {
    super();
    this.nom = 'Cheval';
  }
  manger(): string {
    return 'Legume';
  }
}
