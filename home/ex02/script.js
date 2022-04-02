let taxaInput = document.getElementById('taxa');
taxaInput.disabled = false;
let taxa = 0;

let usdInput = document.getElementById('usd');
usdInput.disabled = true;
let usd = 0;

let brlInput = document.getElementById('brl');
brlInput.disabled = true;
let brl = 0;

let confirmButton = document.querySelector(".confirm");
confirmButton.disabled = false;

let resetButton = document.querySelector(".reset");
resetButton.disabled = true;

let usdButton = document.querySelector(".usd");
usdButton.disabled = true;

let brlButton = document.querySelector(".brl");
brlButton.disabled = true;

function confirmarTaxa() {
    if(taxaInput.value == 0 || taxaInput.value == null) {
        alert('Erro, preencha o campo da taxa.');
        return;
    }
    taxa = taxaInput.value;
    resetButton.disabled = false;
    confirmButton.disabled = true;
    usdButton.disabled = false;
    brlButton.disabled = false;
    taxaInput.disabled = true;
    usdInput.disabled = false;
    brlInput.disabled = false;
}

function resetarTaxa() {
    taxa = 0;
    taxaInput.value = 0;
    usdInput.value = 0;
    brlInput.value = 0;
    resetButton.disabled = true;
    confirmButton.disabled = false;
    usdButton.disabled = true;
    brlButton.disabled = true;
    taxaInput.disabled = false;
    usdInput.disabled = true;
    brlInput.disabled = true;
}

function converterUSD () {
    if(usdInput.value == 0 || usdInput.value == null) {
        alert('Erro, preencha o campo de USD.');
        return;
    }
    usd = usdInput.value;
    brlInput.value = usd * taxa;
}

function converterBRL () {
    if(brlInput.value == 0 || brlInput.value == null) {
        alert('Erro, preencha o campo de BRL.');
        return;
    }
    brl = brlInput.value;
    usdInput.value = brl / taxa;
}