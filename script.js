function showMessage() {
    alert('Welcome to TV Shop! Check out our best-selling TVs.');
}

function showDetails(product) {
    alert(`You clicked on ${product}. Discover its features and amazing offers!`);
}

function submitFeedback(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedbackInput').value;
    const feedbackMessages = document.getElementById('feedbackMessages');
    feedbackMessages.innerHTML = `<p>Thanks for your feedback: "${feedback}"</p>`;
    document.getElementById('feedbackForm').reset();
}
