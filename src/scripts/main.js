AOS.init();

const dataEvento = new Date("May 25, 2024 15:00:00");
const timeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasAteEvento = Math.floor(distanciaEvento % diaEmMs / horaEmMs);
    const minutosAteEvento = Math.floor(distanciaEvento % horaEmMs / minutoEmMs);
    const segundosAteEvento = Math.floor(distanciaEvento % minutoEmMs / 1000);

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s` 

    if (distanciaEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Aguarde informações sobre o próximo festival';
    }
}, 1000);