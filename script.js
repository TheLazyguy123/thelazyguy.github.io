document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    document.getElementById('responseMessage').innerText = 'Thank you for your message, ' + name + '!';
    document.getElementById('contactForm').reset();
});
