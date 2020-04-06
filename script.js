var speelbutton = document.getElementById('speelbutton');
var saldo_formulier = document.getElementById('saldoFormulier');
var saldo_input = document.getElementById('saldoInput');
var current_saldo = document.getElementById('currentSaldo');

function saldo_ophogen() {
    event.preventDefault(); // dit voorkomt dat het default gedrag (herladen van de pagina) wordt uitgevoerd.
    if (saldo_input.value == "") {
        alert("Voer eerst een bedrag in!");
    } else {
    var saldovalue = current_saldo.textContent;
    var krijgValue = Number(saldovalue);
    var saldoOphoog = parseInt(saldo_input.value);
    current_saldo.innerHTML = krijgValue + saldoOphoog;
    }
}

saldo_formulier.addEventListener('submit', saldo_ophogen);

var uitkomst = document.getElementById('uitkomst');
var feedback = document.getElementById('feedback');
var inzet = document.getElementById('inzet');
var winst = document.getElementById('winst');
var saldo = document.getElementById('saldo');

/*var casinoboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
var casinoboardlength = casinoboard.length;*/

function play() {
    var getallen = document.querySelector('input[name="nummer"]:checked').value;
    var saldovalue = current_saldo.textContent;
    var krijgValue = Number(saldovalue);
    var saldoOphoog = parseInt(saldo_input.value);



    if (inzet.value == "0" || current_saldo.textContent == "0") {
        alert("Zet eerst iets in voordat je kan spelen!");
    } else if(parseInt(inzet.value) > parseInt(current_saldo.textContent)){
        alert('Je kan niet meer inzetten dan je huidige saldo!');
    } else {
        var valtopnummer = Math.floor(Math.random() * 37);
        uitkomst.innerHTML = valtopnummer;
        if (getallen == valtopnummer) {
            feedback.innerHTML = "goed!";
            feedback.style.cssText = "color: green;"
            winst.innerHTML = "+" + inzet.value * 36;
            var krijgWinstValue = parseInt(winst.innerHTML);
            current_saldo.innerHTML = krijgValue + krijgWinstValue;

            console.log(krijgWinstValue);
            console.log(winst.innerHTML);
        } else {
            feedback.innerHTML = "fout!";
            feedback.style.cssText = "color: red;"
            winst.innerHTML = "-" + inzet.value;
            current_saldo.innerHTML = krijgValue - parseInt(inzet.value);
        }

    }

}

speelbutton.addEventListener('click', play);

var play = document.getElementById('play');
var pause = document.getElementById('pause');

function audioPlay() {
    document.getElementById("Myaudio").play(); 
}

function audioPause() {
    document.getElementById("Myaudio").pause();
}

play.addEventListener('click', audioPlay);
pause.addEventListener('click', audioPause);


var timersCount = 0, stopped = false, count, counter; // make count, counter global variables so buttons can access them
var timerCounter = setInterval(countTimers, 30000);
countTimers(); // run countTimers once to start

function timer() {
  count = count-1;
  document.getElementById("timer").innerHTML=count;
  if(count <= 0) {
    clearInterval(counter);
    return;
  }
}

function countTimers() {
  timersCount++;


  count = 30;
  counter = setInterval(timer, 1000);

}

speelbutton.addEventListener