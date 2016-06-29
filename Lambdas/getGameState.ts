declare var require: any;

var aws = require('aws-sdk');
let s3 = new aws.S3({});

import {Color} from "../Common/app/Common/Color";


var m = new Color(1, 1, 1);


export var handler = (event, context) => {
    var key = "Angel Island Zone Act 1.min.js";
    console.log('Received event:', event);
    console.log('Received event:', context);
    // Get the object from the event and show its content type
    const params = {
        Bucket: 'sonic-levels',
        Key: key
    };
    s3.getObject(params, (err, data) => {
        context.succeed(data.Body.toString('ascii'));
    });
}; 