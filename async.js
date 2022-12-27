function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// esperar('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperar('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperar('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase ', fase);
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {

        const fase1 = await esperar('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperar('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperar('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase ', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();