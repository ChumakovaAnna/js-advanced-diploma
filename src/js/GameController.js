import GamePlay from "./GamePlay";

export default class GameController {
    constructor(gamePlay, stateService) {
        this.gamePlay = gamePlay;
        this.stateService = stateService;
    }

    init() {
    // TODO: add event listeners to gamePlay events
        this.gamePlay.drawUi("prairie");
    // TODO: load saved stated from stateService
    }

    onCellClick(index) {
    // TODO: react to click
    }

    onCellEnter(index) {
    // TODO: react to mouse enter
    }

    onCellLeave(index) {
    // TODO: react to mouse leave
    }
}
