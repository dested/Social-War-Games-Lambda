import {Color} from "../Common/Color";
var m = new Color(1,1,1);


export var handler = (event, context) => {

    if (event != null) {
        console.log('event = ' + JSON.stringify(event));
    }
    else {
        console.log('No event object');

    }

    context.succeed('Hello World');  // SUCCESS with message
};