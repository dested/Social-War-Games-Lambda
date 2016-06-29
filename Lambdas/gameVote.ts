import {Color} from "../Common/app/Common/Color";


var m = new Color(1,1,1);


export var handler = (event, context) => {

    if (event != null) {
        console.log('event = ' + JSON.stringify(event));
    }
    else {
        console.log('No event object');

    }

    context.done(null, 'Hello World');  // SUCCESS with message
};