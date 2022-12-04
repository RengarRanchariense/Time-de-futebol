const nomeJogador = document.querySelector("#nome");
const posi = document.querySelector("#posi");
const num = document.querySelector("#num");
const completo = document.querySelector(".timeCompleto");
const divBtns = document.querySelector(".excluir");
const convocar = document.querySelector(".convocar");
const deletar = document.querySelector("#deletar");

convocar.addEventListener("click", () => {
  if (nomeJogador.value == "" || posi.value == "" || num.value == "") {
    alert("Os Campos devem ser preenchidos corretamente!");
  } else {
    let escalado = document.createElement("div");
    escalado.classList.add("elementos" + num.value);
    escalado.classList.add("elementos");
    let icone = document.createElement("i");
    icone.classList.add("fa-solid");
    icone.classList.add("fa-user");
    let nomeEscalado = document.createElement("p");
    nomeEscalado.innerText = nomeJogador.value;
    let posiEscalado = document.createElement("p");
    posiEscalado.innerText = posi.value;
    let numEscalado = document.createElement("p");
    numEscalado.innerText = num.value;
    escalado.append(icone, nomeEscalado, posiEscalado, numEscalado);
    completo.appendChild(escalado);

    nomeJogador.value = "";
    posi.value = "";
    num.value = "";
  }
});

deletar.addEventListener("click", () => {
  document.querySelector("#deletar").disabled = true;
  const divExclu = document.createElement("div");
  divExclu.classList.add("div-exclu");
  const excluir = document.createElement("label");
  excluir.innerText = "Número do jogador: ";
  const exInput = document.createElement("input");
  exInput.placeholder = "Número";
  exInput.classList.add("numero");
  const btn = document.createElement("button");
  btn.classList.add("confirme");
  btn.innerText = "Confirmar";
  const btnCancel = document.createElement("button");
  btnCancel.innerText = "Cancelar";
  btnCancel.classList.add("cancel");

  divExclu.append(excluir, exInput, btn, btnCancel);
  divBtns.appendChild(divExclu);

  btn.addEventListener("click", () => {
    const numExcluir = document.querySelector(".numero");
    document.querySelector(".elementos" + numExcluir.value).remove();
    alert("jogador removido com sucesso !");
    document.querySelector("#deletar").disabled = false;
    document.querySelector(".div-exclu").remove();
  });

  btnCancel.addEventListener("click", () => {
    deletar.setAttribute("disabled", false);
    alert("Nenhuma alteração foi feita!");
    document.querySelector("#deletar").disabled = false;
    document.querySelector(".div-exclu").remove();
  });
});
