AOS.init();

const dataAniversario = new Date("Oct 15, 2024 00:00:00");//nova data passando todas as informações
const timeStampAniversario = dataAniversario.getTime(); //pegando o tempo em milissegundos dessa data

const contaTempo = setInterval(function(){//função para definirmos de um em um segundo, oque vamos fazer
    const agora = new Date(); //instanciando um tempo para quando for efetuada a operação
    const timeStampAtual = agora.getTime();//pegue o tempo dessa operação atual

    const distanciaAteOEvento = timeStampAniversario - timeStampAtual; //lembrando que isso é em milissegundos

    const diasEmMs = 1000 * 60 * 60 * 24;//tempo de dias até o evento sendo transformado para milissegundos e segue a lógica
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;
    //método floor para arredondar para baixo ...
    const diaAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = 
    `${diaAteOEvento} d ${horasAteOEvento} h ${minutosAteOEvento} min ${segundosAteOEvento} s`;

    if(distanciaAteOEvento<0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "O evento já terminou!"
    }
}
,1000);