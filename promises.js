const fs = require('fs');
const debug = require('debug')('async');

debug(`Let's read all files in a directory!\n`);

const currentDir = `${__dirname}`;

fs.promises.readdir(currentDir)
    .then(filenames => {
        filenames.forEach(filename => { //Opportunity to use Promises.all() here
            fs.promises.lstat(filename).then(stats => {
                if(stats.isFile()){
                    fs.promises.readFile(filename).then(file => {
                        //Print File
                        debug(filename);
                        console.log('###################');
                        console.log(file.toString().slice(0,50));
                        console.log('###################\n\n');
                    })
                    .catch(err => console.error(err));
                }
            });
        })
    })
    .catch(err => console.error(err))

//When Will this happen?
debug('Callbacks!\n');