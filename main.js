function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

alert('Clicca sul pulstante start per generare 5 numeri, avrai 30 secondi per memorizzarli')

const button = document.getElementById('start');

button.addEventListener("click", function numeri(){

    numbers = [];

    for (let i = 1; i <= 5; i++) {
        let numeri = randomNumber(1, 50)
        numbers.push(numeri)
    }

    console.log(numbers)
    document.getElementById('numbers').innerHTML = (numbers);

});






