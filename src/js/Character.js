/**
 * Main class for creating characters. All other types of classes are inherited from it.
 */
export default class Character {
  constructor(level, type = "generic") {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: throw error if user use "new Character()"
    if (new.target === Character) {
      throw new Error("Do not use new Character()!");
    }
  }
}
