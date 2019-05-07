const fs = require('fs');
const debug = require('debug')('async');

const currentDir = `${__dirname}`;

async function printFiles(){
    debug(`Let's read all files in a directory!\n`);

    let filenames;
    try{
        filenames = await fs.promises.readdir(currentDir);
    }
    catch(error) { 
        console.log(error);
    };
    const printFileActions = filenames.map(async function(filename) {
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

    Promise.all(printFileActions).then(() => {
        console.log('Done')
    });
}

printFiles().then(() => {
    //When Will this happen?
    debug('Callbacks!\n');
}).catch((error) => { console.log(error)});
