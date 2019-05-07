const fs = require('fs');
const debug = require('debug')('async');

debug(`Let's read all files in a directory!\n`);

const currentDir = `${__dirname}`;

fs.readdir(currentDir, (err, filenames) => {
    //Print Error if any
    if(err) console.error(err);

    filenames.forEach(filename => {
        fs.lstat(filename, (err, stats) => {
            if(stats.isFile()){
                fs.readFile(filename, (err, file) => {
                    //Print Error if any
                    if(err) console.error(err);

                    //Print File
                    debug(filename);
                    console.log('###################');
                    console.log(file.toString().slice(0,50));
                    console.log('###################\n\n');
                });
            }
        });
    });
});

//When Will this happen?
debug('Callbacks!\n');