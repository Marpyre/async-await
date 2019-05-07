const fs = require('fs');
const debug = require('debug')('async');

//Callback function (i.e., this could be imported from a different file)
function handleFile(err, file){
    //Print Error if any
    if(err) return console.error(err);

    //Print File
    console.log('###################');
    console.log(file.toString().slice(0,50));
    console.log('###################\n\n');
}

debug(`Let's read a file!\n`);

fs.readFile('README.md', handleFile);

//When Will this happen?
debug('Callbacks!\n');