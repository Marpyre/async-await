const fs = require('fs');
const debug = require('debug')('async');

debug(`Let's read a file!\n`);

fs.readFile('README.md', function(err, file){
    //Print Error if any
    if(err) return console.error(err);

    //Print File
    console.log('###################');
    console.log(file.toString());
    console.log('###################\n\n');
})

//When Will this happen?
debug('Callbacks!\n');