///<reference path="../Common/typings/Compress.d.ts"/>

import {Color} from "../Common/Color";
import {GameUnitType} from "../Common/hexLibraries/GridHexagonConstants";
declare var global;

let s3 = new (<any>global).aws.S3({});


var m = new Color(1, 1, 1);


export var handler = (event, context) => {
    var gameBoard = new GameBoard();
    let gameState = gameBoard.initializeGameState();
    var m = new Compressor().CompressText(JSON.stringify(gameState));
    context.succeed(m);
};

function random(bottom: number, top: number): number {
    return (Math.random() * (top - bottom) + bottom) | 0;
}

export class GameBoard {

    initializeGameState() {
        var stateData = new GameStateData();
        stateData.board = new HexBoard();
        var boardStr = "";
        stateData.board.width = 84;
        stateData.board.height = 84;
        for (var y = 0; y < stateData.board.height; y++) {
            for (var x = 0; x < stateData.board.width; x++) {
                if (random(0, 100) < 10) {
                    boardStr += "0";
                }
                else {
                    if (random(0, 100) < 15)
                        boardStr += 2;
                    else if (random(0, 100) < 6)
                        boardStr += 3;
                    else
                        boardStr += 1;
                }

                boardStr += ((y / ((stateData.board.height / 3) | 0)) | 0) + 1;
            }
            boardStr += "|";
        }
        stateData.board.boardStr = boardStr;

        stateData.lastGeneration = new Date();
        stateData.factions = [];
        for (var f = 0; f < 3; f++) {
            var gameFaction = new GameFaction();
            gameFaction.units = [];
            gameFaction.id = GameBoard.makeId();

            switch (f) {
                case 0:
                    gameFaction.color = "#FF87B7";
                    break;
                case 1:
                    gameFaction.color = "#C4E283";
                    break;
                case 2:
                    gameFaction.color = "#9985E5";
                    break;
            }


            var numOfUnits = 300;
            for (var i = 0; i < numOfUnits; i++) {
                var unitType = random(0, 100);

                let x = 0;
                let y = 0;
                while (true) {
                    x = random(0, stateData.board.width);
                    y = random(stateData.board.height / 3 * f, stateData.board.height / 3 * (f + 1));
                    if (gameFaction.units.filter(a => a.x === x && a.y === y).length === 0) {
                        break;
                    }
                }

                var gameUnit: GameUnit;

                if (unitType < 60) {
                    gameUnit = new GameUnit();
                    gameUnit.id = GameBoard.makeId();
                    gameUnit.health = 2;
                    gameUnit.unitType = "Infantry";
                    gameUnit.x = x;
                    gameUnit.y = y;
                } else if (unitType < 90) {
                    gameUnit = new GameUnit();
                    gameUnit.id = GameBoard.makeId();
                    gameUnit.health = 6;
                    gameUnit.unitType = "Tank";
                    gameUnit.x = x;
                    gameUnit.y = y;
                } else {
                    gameUnit = new GameUnit();
                    gameUnit.id = GameBoard.makeId();
                    gameUnit.health = 16;
                    gameUnit.unitType = "Base";
                    gameUnit.x = x;
                    gameUnit.y = y;
                }
                gameFaction.units.push(gameUnit);
            }
            stateData.factions.push(gameFaction);
        }
        return stateData;
    }

    public static makeId() {
        function gen(count) {
            var out = "";
            for (var i = 0; i < count; i++) {
                out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            return out;
        }

        return [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
    }



    public static getUnitById(stateData: GameStateData, id: string): GameUnit {
        for (var gameFaction of stateData.factions) {
            for (var gameUnit of gameFaction.units) {
                if (gameUnit.id === id) {
                    return gameUnit;
                }
            }
        }
        return null;
    }
    public static getFactionByUnitId(stateData: GameStateData, unitId: string): GameFaction {
        for (var gameFaction of stateData.factions) {
            for (var gameUnit of gameFaction.units) {
                if (gameUnit.id === unitId) {
                    return gameFaction;
                }
            }
        }
        return null;
    }
    public static getUnitByLocation(stateData: GameStateData, x: number, y: number): GameUnit {
        for (var gameFaction of stateData.factions) {
            for (var gameUnit of gameFaction.units) {
                if (gameUnit.x === x && gameUnit.y === y) {
                    return gameUnit;
                }
            }
        }
        return null;
    }


}

export class GameStateData {
    id: string;
    lastGeneration: Date;
    board: HexBoard;
    factions: GameFaction[];
    generation: number;
}
export class HexBoard {
    width: number;
    height: number;
    boardStr: string;
}
export class GameFaction {
    id: string;
    color: string;
    units: GameUnit[];
}
export class GameUnit {

    public id: string;
    public unitType: GameUnitType;
    public health: number;
    public x: number;
    public y: number;
    public hurt(amount: number, gameState: GameStateData): void {
        this.health -= amount;
        if (this.health <= 0) {
            var faction = GameBoard.getFactionByUnitId(gameState, this.id);
            faction.units.splice(faction.units.indexOf(this), 1);
        }

    }
}

