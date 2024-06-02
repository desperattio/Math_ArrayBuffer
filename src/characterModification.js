import Character from "./character"

export default class CharacterModification extends Character {
  constructor(name, type) {
    super(name, type);
    this._attack = 100;
    this._stoned = false;
    this.distance = 1;
  }

  set stoned(val) {
    this._stoned = val;
  }

  get stoned() {
    return this._stoned;
  }

  set distance(val) {
    this._distance = val;
  }

  get distance() {
    return this._distance;
  }

  set attack(val) {
    this._attack = val;
  }

  get attack() {
    this._attack -= this._attack * ((this.distance - 1) / 10);
    if (this.stoned) {
      this._attack -= Math.log(this.distance) * 5;
    }
    return (this._attack > 0) ? Math.floor(this._attack) : 0;
  }

}