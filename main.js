function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



const button = document.getElementById('start');

button.addEventListener("click",

    function numeri() {

        numbers = [];

        for (let i = 1; i <= 5; i++) {
            let numeri = randomNumber(1, 80)
            numbers.push(numeri)
        }

        document.getElementById('numbers').innerHTML = (numbers);

        setTimeout(cancellaNumeri, 29900)
        setTimeout(numeriIndovinati, 30000)
    }
    
);

function cancellaNumeri() {
    document.getElementById('numbers').classList.add("none");
}

function numeriIndovinati() {
    
    let indovinati = prompt('Scrivi i numeri che hai appena visto seguiti da una virgola')

    if (indovinati == numbers) {
        alert('hai vinto!')
    } else {
        alert('Mi dispiace hai perso, riprova!')
    }

}







