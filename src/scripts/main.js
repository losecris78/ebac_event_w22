AOS.init();

const dataDoEvento = new Date("Jun 12, 2024 23:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval (function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteoEvento = timeStampDoEvento - timeStampAtual;
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minEmMS = 1000 * 60;

    const diasAteoEvento = Math.floor(distanciaAteoEvento / diasEmMs);
    const HorasAteoEvento = Math.floor((distanciaAteoEvento % diasEmMs) / horasEmMs);
    const minAteoEvento = Math.floor((distanciaAteoEvento % horasEmMs) / minEmMS);
    const segAteoEvento =  Math.floor((distanciaAteoEvento % minEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteoEvento} d ${HorasAteoEvento} h ${minAteoEvento} m ${segAteoEvento} s`;
    if (distanciaAteoEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "El evento ya expiró."
    }


},1000);

