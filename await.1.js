const fs = require('fs');
const debug = require('debug')('async');

const currentDir = `${__dirname}`;

async function printFiles(){
    debug(`Let's read all files in a directory!\n`);

    const filenames = await fs.promises.readdir(currentDir);
    filenames.forEach(async function(filename) {
        const stats = await fs.promises.lstat(filename);
        
        if(stats.isFile()){
            const file = await fs.promises.readFile(filename);
            
            //Print File
            debug(filename);
            console.log('###################');
            console.log(file.toString().slice(0,50));
            console.log('###################\n\n');
        }
    });
}

printFiles();

//When Will this happen?
debug('Callbacks!\n');
