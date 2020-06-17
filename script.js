let name = prompt("Welkom! Wat is je naam?");
alert(`Welkom bij Guess the number ${name}.`);

let randomNumber = Math.floor(Math.random() * 26);
console.log(randomNumber);
let guess = "";
let counter = 5;
while (parseInt(guess) != randomNumber) {
  guess = prompt("voer een nummer in tussen 0 - 25");
  console.log("guess", guess);
  counter--;
  console.log("counter", counter);
  if (parseInt(guess) != randomNumber) {
    alert(`niet correct, probeer nog eens, je hebt nog ${counter} pogingen`);
  }
  if (parseInt(guess) != randomNumber && counter === 0) {
    alert(`Jammer er zijn geen pogingen meer, refresh pagina probeer opnieuw`);
    break;
  }
  if (parseInt(guess) === randomNumber) {
    alert(`Gefeliciteerd je hebt gewonnen, tot de volgende keer ${name}`);
  }
  if (parseInt(guess) < randomNumber) {
    alert(`je nummer is te laag`);
  }
  if (parseInt(guess) > randomNumber) {
    alert(`je nummer is te hoog`);
  }
}
