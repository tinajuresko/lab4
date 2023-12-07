function submitQuiz() {
    
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value === 'true',
        q2: document.querySelector('input[name="q2"]:checked').value === 'false',
        q3: document.querySelector('input[name="q3"]:checked').value === 'true',
        q4: document.querySelector('input[name="q4"]:checked').value === 'true',
        q5: document.querySelector('input[name="q5"]:checked').value === 'true'
        
    };

    const score = Object.values(answers).reduce((acc, answer) => acc + (answer ? 1 : 0), 0);
    const resultContainer = document.getElementById('result-container');
    const resultImage = document.getElementById('result-image');
    const resultText = document.getElementById('result-text');

    if (score === Object.keys(answers).length) {
        resultImage.src = 'images/t.jpg'; 
        resultText.textContent = 'Bravo! Ti si sigurno iz Zadra.';
    } else {
        resultImage.src = 'images/f.jpg';
        resultText.textContent = 'Nazalost, neki odgovori su netocni. Pokusaj ponovno!';
    }

    resultContainer.style.display = 'block';
}
