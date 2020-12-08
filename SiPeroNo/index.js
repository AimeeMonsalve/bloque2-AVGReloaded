const siperono =(v1,v2) =>{
 let arrayTot= v1.concat(v2);
 let num= arrayTot.length- v1.length;
 let sitotal= arrayTot;
 console.log(sitotal);
  for (let i=0; i<num; i++){
     sitotal.pop();
     
        };
     return sitotal;
     
};