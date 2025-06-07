function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  // Se a altura for maior que 3, vamos considerar que foi digitada em cm e converter para metros
  if (altura > 3) {
    altura = altura / 100;
  }

  let resultado = peso / (altura * altura);

  document.getElementById("resultado").textContent = "Seu IMC é: " + resultado.toFixed(2);
}
