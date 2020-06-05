setTimeout(() => {
    console.log('a');
    setTimeout(() => console.log('b'), 1000);
}, 1000); //2

