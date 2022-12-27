function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
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
        return esperar('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Eu serei o último a ser exibido!');
    })
    .catch(); 