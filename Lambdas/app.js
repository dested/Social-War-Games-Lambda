require('./libs/system.js');
require('./libs/RawDeflate.js');
global.ts = require('typescript');
global.express = require('express');
global.cors = require('cors');
global.aws = require('aws-sdk');


System.config({
    packages: {
        '': { main: 'express.ts', defaultExtension: 'ts', meta: { '*': { format: 'esm' } } },
        '../Common': { defaultExtension: 'ts', meta: { '*': { format: 'esm' } } }
    },
    transpiler: 'typescript',
    baseURL: '',
    typescriptOptions: {
        resolveTypings: true,
        emitDecoratorMetadata: true,
        sourceMap: true,
        inlineSourceMap: true
    }
});
System.import('').catch(e => {
    console.error(e);
});
