const saldo_formulier = document.getElementById('saldoFormulier'); //het formulier waar saldo wordt ingevoerd
const saldo_input = document.getElementById('saldoInput'); //inputveld van saldo
const current_saldo = document.getElementById('currentSaldo'); //het actuele speelsaldo


function saldo_ophogen() { //functie voor het invoeren van je saldo en ophogen daarvan
    event.preventDefault(); // dit voorkomt dat het default gedrag (herladen van de pagina) wordt uitgevoerd.
    if (saldo_input.value == "") { //als er nog niks is ingevuld, eerst een warning
        alert("Voer eerst een bedrag in!");
    } else {
    let saldovalue = current_saldo.textContent; //check hoeveel saldo er nu is
    let krijgValue = Number(saldovalue); //zet dit om naar een number/integer
    let saldoOphoog = parseInt(saldo_input.value); //check hoeveel er is ingevuld
    current_saldo.innerHTML = krijgValue + saldoOphoog; //tel het ingevulde saldo en het actuele saldo bij elkaar op
    }
}

saldo_formulier.addEventListener('submit', saldo_ophogen); //als form wordt gesubmit, voer dan functie uit

const speelbutton = document.getElementById('speelbutton');  //de speel button onderaan het speelbord
let uitkomst = document.getElementById('uitkomst'); //het gevallen nummer
let feedback = document.getElementById('feedback'); //feedback of je het juiste nummer hebt geraden
let inzet = document.getElementById('inzet'); //het inputveld van je inzet
let winst = document.getElementById('winst'); //je winst of verlies


function play() {
    let getallen = document.querySelector('input[name="nummer"]:checked').value; //check welk cijfer je hebt gekozen
    let saldovalue = current_saldo.textContent; //check hoeveel saldo er nu is
    let krijgValue = Number(saldovalue); //zet dit om naar een number/integer
    let saldoOphoog = parseInt(saldo_input.value); //check hoeveel er is ingevuld
    
    if (inzet.value == "0" || current_saldo.textContent == "0") { //check eerst of er wel geld is ingezet of dat je wel genoeg saldo hebt
        alert("Zet eerst iets in voordat je kan spelen!");
    } else if(parseInt(inzet.value) > parseInt(current_saldo.textContent)){ //als je inzet meer is dan actuele saldo kan je niet spelen
        alert('Je kan niet meer inzetten dan je huidige saldo!');
    } else {
        let valtopnummer = Math.floor(Math.random() * 37); //het willekeurige nummer wordt hier gegenereerd
        uitkomst.innerHTML = valtopnummer; //laat dit nummer zien
        if (getallen == valtopnummer) { //check of je gekozen nummer overeenkomt met het gegenereede nummer
            feedback.innerHTML = "goed!"; //geef feedback
            feedback.style.cssText = "color: green;" //verander de kleur naar groen
            winst.innerHTML = "+" + inzet.value * 36; //zet je inzet om naar winst en laat dit zien
            let krijgWinstValue = parseInt(winst.innerHTML); //zet dit om naar een getal
            current_saldo.innerHTML = krijgValue + krijgWinstValue; //tel de winst op bij je saldo
        } else { //als je gekozen nummer niet overeenkomt
            feedback.innerHTML = "fout!"; //geef feedback
            feedback.style.cssText = "color: red;" //verander de kleur naar rood
            winst.innerHTML = "-" + inzet.value; //laat je verlies zien
            current_saldo.innerHTML = krijgValue - parseInt(inzet.value); //haalt je inzet van je saldo af
        }

    }

};

speelbutton.addEventListener('click', play); //als je op de button klikt wordt bovenstaande functie uitgevoerd.

const audioArray = [{
    title: "Achtergrond Muziek Casino",
    source: "https://oege.ie.hva.nl/~overeej2/Roulette%20Casino/audio/background.mp3",

},
{
    title: "Achtegrond muziek vrolijk",
    source: "https://oege.ie.hva.nl/~overeej2/Roulette%20Casino/audio/Best%20Of%20No%20Copyright%20Sounds%20%20NCS%201%20Hour%20Gaming%20Mix.mp3",
},
];

const playAudio = document.getElementById('play'); //audio play
const playAudioMix = document.getElementById('playMix'); //audio play
const pause = document.getElementById('pause'); //audio pause

function audioPlayCasino() {
    document.getElementById("Myaudio").src = audioArray[0].source
    document.getElementById("Myaudio").play(); //speel audio af
}

function audioPlayMix() {
    document.getElementById("Myaudio").src = audioArray[1].source
    document.getElementById("Myaudio").play(); //speel audio af
}

function audioPause() {
    document.getElementById("Myaudio").pause(); //pauzeer audio
}

playAudio.addEventListener('click', audioPlayCasino); //als je hierop klikt speelt audio af
playAudioMix.addEventListener('click', audioPlayMix); //als je hierop klikt speelt audio af
pause.addEventListener('click', audioPause); //als je hierop klikt pauzeert audio