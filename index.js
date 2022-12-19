const fs = require('fs/promises');

const main = async function main (){
    for (let index = 0; index < 100; index++) {
        await fs.copyFile( './20MB.zip', `20MB-test${index}.${(Math.random() + 1).toString(36).substring(2)}`)        
    } 
}

main()