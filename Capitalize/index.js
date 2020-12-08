const convertir =(string1)=>{
    let text1=[];
    for (let i=0; i<string1.length; i++){
        string1[i]=== "h" || string1[i]==="m" ? text1[i]=string1[i].toUpperCase(): text1[i]=string1[i];
        
    };
    return text1;
};