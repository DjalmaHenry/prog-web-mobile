let counter = {
    one: document.getElementById('counter-one'),
    two: document.getElementById('counter-two'),
}

counter.one.value = '0';
counter.two.value = '0';

function clickDiv(counter) {
    let value = parseInt(counter.value) + 1;
    counter.innerHTML = value;
    counter.value = value;
}

function reset(counter) {
    counter.innerHTML = -1;
    counter.value = -1;
}
