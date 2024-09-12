const form = document.querySelector("#forma");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);

  console.log(`seu pesp${weight} e aqui sua altura ${height}`);

  const imc = (weight / (height * height)).toFixed(2);

  const value = document.querySelector("#value");
  let description = "";

  document.querySelector("#infos").classList.remove("hidden");

  if (imc < 18.5) {
    description = "Cuidado! Você está Abaixo Do Peso";
  } else if (imc >= 18.5 && imc <= 25) {
    description = "Parabens, Seu Peso é o ideal";
  } else if (imc > 25 && imc <= 30) {
    description = "Cuidado! Você está sobrepeso!";
  } else if (imc > 30 && imc <= 35) {
    description = "Cuidado! Obesidade moderada";
  } else if (imc > 35 && imc <= 40) {
    description = "Cuidado! Obesidade severa";
  } else {
    description = "Cuidado! Você está com obesidade morbida";
  }

  value.innerHTML = imc.replace(".", ",");
  document.querySelector("#description").innerHTML = description;
});
