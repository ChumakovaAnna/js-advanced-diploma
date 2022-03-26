import Character from "../Character";

export default class Undead extends Character {
  constructor(level) {
    super(level, "undead");
    this.attack = 25;
    this.defence = 25;
    this.distance = 4;
    this.distanceAttack = 1;
  }
}
