let id = 0; // id do contador
let counter = []; // array de contadores

function createCounter() {
  let id = getNextId(); // pega o id mais alto

  const divCounters = document.getElementById("counters"); // pega o div que contém os contadores

  const text = document.getElementById("counter-name").value; // pega o valor do input
  document.getElementById("counter-name").value = ""; // limpa o input

  const elementDiv = document.createElement("div"); // cria um novo div

  elementDiv.id = id; // atribui o id
  elementDiv.className = "counter"; // atribui a classe

  const p = document.createElement("p"); // cria um novo p para o nome
  const p2 = document.createElement("p"); // cria um novo p para o contador
  const button = document.createElement("button"); // cria um novo button para zerar o contador

  p2.id = id; // atribui o id

  p.innerHTML = text; // atribui o texto do input ao p
  button.innerHTML = "Resetar"; // atribui o texto do button ao button
  counter.push(0); // adiciona o contador ao array
  p2.innerHTML = counter[id];  // atribui o valor do contador ao p2

  elementDiv.onclick = function () { // atribui o evento de click de incrementar contador
    incrementCounter(p2);
  }; 
  button.onclick = function () { // atribui o evento de click de resetar contador
    reset(p2);
  };

  elementDiv.appendChild(p); //Adiciona o nome a div
  elementDiv.appendChild(p2); //Adiciona o contador a div
  elementDiv.appendChild(button); //Adiciona o botao de reset a div
  elementDiv.style.backgroundColor = getRandomColor(); // atribui a cor de fundo ao div do contador
  divCounters.appendChild(elementDiv); //Adiciona a div a div de contadores
}

function getNextId() { // pega o id mais alto
  return id++;
}

function getRandomColor() { // gera uma cor aleatoria
  let color = "#" + parseInt(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return color;
}

function incrementCounter(e) { // incrementa o contador
  e.innerHTML = ++counter[e.id];
}

function reset(e) { // reseta o contador
  counter[e.id] = -1;
  e.innerHTML = counter[e.id];
}
