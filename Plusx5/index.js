const sumas = (e) => {
    let sum=0;
        for (let i=0; i< e; i++){
        let nu= parseInt(prompt(`Ingresar número ${i + 1}`));
         sum += nu;
    };
       return sum;
};