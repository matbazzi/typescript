export class Car implements Icar {
  isStart: boolean;
  position: number;
  constructor(isStart = false, position = 0) {
    this.isStart = isStart;
    this.position = position;
  }
  start() {
    this.setStart = true;
  }
  drive(distance: number): boolean {
    if (this.getStart) {
      this.position += distance;
      return true;
    }
    return false;
  }
  getPosition(): number {
    return this.position;
  }
  get getStart(): boolean {
    return this.isStart;
  }
  set setStart(isStart: boolean) {
    this.isStart = isStart;
  }
}
