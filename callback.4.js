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

                //Print Filename
                debug(filename);

                fs.readFile(filename, (err, file) => {
                    //Print Error if any
                    if(err) return console.error(err);

                    //Print File
                    console.log('###################');
                    console.log(file.toString());
                    console.log('###################\n\n');
                });
            }
        });
    });
});

//When Will this happen?
debug('Callbacks!\n');