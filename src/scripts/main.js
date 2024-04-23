AOS.init();

const dataAniversario = new Date("Oct 15, 2024 00:00:00");
const timeStampAniversario = dataAniversario.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampAniversario - timeStampAtual;

    

    const diaAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutosAteOEvento = distanciaAteOEvento % ()
    const segundosAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60));
}
,1000)