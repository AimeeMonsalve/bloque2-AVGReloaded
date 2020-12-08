const removerduplicado = (v1) =>{
  let newA= [];
  for (let i=0; i<v1.length; i++){
    newA.includes(v1[i])? null :newA.push(v1[i]);
  };
  return newA;
  console.log(newA);
};