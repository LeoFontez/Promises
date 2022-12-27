function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// then só vai ser executado depois do "resolve" e o catch só depois do "reject"
esperar('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperar('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperar(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Eu serei o último a ser exibido!');
    })
    .catch(e => {
        console.log('Erro:', e)
    }); 