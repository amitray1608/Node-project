const int = setInterval (() =>{
    console.log('nub');
}, 1000);
setTimeout(() => {
    console.log('biych');
    clearInterval(int);
}, 3000);