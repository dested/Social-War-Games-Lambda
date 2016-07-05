///<reference path="../Common/typings/Compress.d.ts"/>


declare var global;

import * as getGameState from "./getGameState";
import * as gameVote from "./gameVote";

var app = (<any>global).express(); 

app.use((<any>global).cors());
function handleContext(res) {
    return {
        succeed: (data) => {
            res.send(data);
        },
        error: (data) => {
            res.send(data);
        }
    };
}


app.get('/gameState', (req, res) => {
    getGameState.handler(null, handleContext(res));
});

app.get('/gameVote', (req, res) => {
    gameVote.handler(null, handleContext(res));
});

app.listen(3000);
