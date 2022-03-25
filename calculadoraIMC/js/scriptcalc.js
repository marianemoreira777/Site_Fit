// IMC = Peso ÷ (Altura × Altura)

function mostraResultado() {
  let pesoHTML = document.getElementById("peso");
  let alturaHTML = document.getElementById("altura");
  let peso = Number(pesoHTML.value);
  let altura = Number(alturaHTML.value);

  let IMCcalc = peso / (altura * altura);
  let resultadoHTML = document.getElementById("imc");
  resultadoHTML.innerHTML = `${IMCcalc.toFixed(2)}`;

  let mensagem = document.getElementById("mensagem");

  if (IMCcalc < 18.5) {
    // Magreza
    console.log("Magreza");
    mensagem.innerHTML = "Magreza";
  } else if (18.5 <= IMCcalc && IMCcalc <= 24.9) {
    // Normal
    console.log("Normal");
    mensagem.innerHTML = "Normal";
  } else if (25 <= IMCcalc && IMCcalc <= 29.9) {
    // Sobrepeso
    console.log("Sobrepeso");
    mensagem.innerHTML = "Sobrepeso";
  } else if (30 <= IMCcalc && IMCcalc <= 39.9) {
    // Obesidade
    console.log("Obesidade");
    mensagem.innerHTML = "Obesidade";
  } else {
    // Obesidade grave
    console.log("Obesidade grave");
    mensagem.innerHTML = "Obesidade grave";
  }
}
