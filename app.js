const express = require('express');
const app = express();

app.get('/results/:n1/:n2', (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Se hace la suma ${n1} + ${n2} = ${n1+n2}`);
});

app.post('/results/:n1/:n2', (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Se hace la multiplicacion ${n1} * ${n2} = ${n1*n2}`);
});

app.put('/results/:n1/:n2', (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    if(n2 == 0){
        response.send('No se puede realizar la operacion');
    }else{
        response.send(`Se hace la division ${n1} / ${n2} = ${n1/n2}`);
    }
    
});

app.patch('/results/:n1/:n2', (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Se elevan los numeros a la potencia ${n1} ^ ${n2} = ${n1**n2}`);
});

app.delete('/results/:n1/:n2', (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    response.send(`Se hace la resta ${n1} - ${n2} = ${n1-n2}`);
});

app.listen(2069, ()=>{
    console.log("El servidor esta activo y corriendo compadRe");
});