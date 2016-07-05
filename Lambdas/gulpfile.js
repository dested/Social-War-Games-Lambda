var gulp = require('gulp');
var lambda = require('gulp-awslambda');
var zip = require('gulp-zip');
var ts = require('gulp-typescript');
var gutil = require('gulp-util');
var headerfooter = require('gulp-headerfooter');
var addsrc = require('gulp-add-src');



var lambdaFunctions = ["getGameState", "gameVote"];

function string_src(filename, string) {
    var src = require('stream').Readable({ objectMode: true });
    src._read = function () {
        this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }));
        this.push(null);
    }
    return src;
}


gulp.task('default',
    function () {

        for (var i = 0; i < lambdaFunctions.length; i++) {
            var lambdaFunction = lambdaFunctions[i];

            string_src("main.ts", `import * as f from "./${lambdaFunction}";export function handler(event, context) {console.log(JSON.stringify(f.handler));f.handler(event,context);}`)
                .pipe(ts(ts.createProject('tsconfig.json')))
                .pipe(headerfooter.header("require('./RawDeflate.js');"))
                .pipe(headerfooter.header("require('./system.js');"))
                .pipe(headerfooter.header("global.aws = require('aws-sdk');"))
                .pipe(headerfooter.footer(`exports.handler = function (event, context) {console.log("${lambdaFunction}");System.import("Lambdas/main").then(function (module) {console.log("3");module.handler(event, context);console.log("4");}).catch(ee=>{console.error(ee);});}`))
                .pipe(addsrc('./libs/system.js'))
                .pipe(addsrc('./server_modules/**/*'))
                .pipe(zip('archive-' + lambdaFunction + '.zip'))
                .pipe(lambda({
                    FunctionName: "social-war-games--" + lambdaFunction,
                    Handler: 'app.handler',
                    Role: 'arn:aws:iam::114394156384:role/lambda_basic_execution'
                },
                {
                    region: 'us-west-2'
                }))
                            .pipe(gulp.dest('dist'));

        }


    });