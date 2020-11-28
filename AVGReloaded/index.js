const pro = (e) => {
    let sum=0;
    for (let i=0; i< e.length; i++){
         sum = sum + e[i];
    };
    let prom = sum / e.length;
    return prom;
};