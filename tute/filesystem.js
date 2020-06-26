const fs = require('fs');

//readFile will throw an error if the file is not found. 
/*
fs.readFile('./docs/text1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

*/
// writeFile command helps us create a file if doesn't exist and if it exist then it will be modified with the 
//new data;

/*
fs.writeFile('./docs/text2.txt', 'This file was created during the process.',() =>{
    console.log('If the file exist then it will be modified else a new file will be created');
});
*/

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}
