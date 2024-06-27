
document.querySelector('#fetch-advice').addEventListener('click', async function() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip;
        console.log(advice);

        document.querySelector('#advice-number').textContent = `Advice: #${advice.id}`;
        document.querySelector('#advice-text').textContent = `${advice.advice}`;

    } catch (e) {
        console.error('error al obtener la data', e);
    };
});


function consultar() {
    const URL = 'https://api.adviceslip.com/advice'
    fetch(URL)
        .then(response => response.json)
        .then(console.log(response))
}