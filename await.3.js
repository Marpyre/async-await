const fs = require('fs');
const debug = require('debug')('async');

const currentDir = `${__dirname}`;

async function printFiles(){
    debug(`Let's read all files in a directory!\n`);

    const filenames = fs.promises.readdir(currentDir);
    const filenames2 = fs.promises.readdir('.');

    console.log('filenames:', filenames)
    console.log('filenames2:', filenames)

    //Does this work?
    const areTheyEqual = await filenames === await filenames2;
    console.log(areTheyEqual);
}

printFiles();
