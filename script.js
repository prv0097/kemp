// Gallery image interactivity (for index.html)
const images = document.querySelectorAll('.gallery img');
if (images.length > 0) {
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            img.style.transform = 'scale(1.1)';
            img.style.boxShadow = '0 0 40px rgba(255, 51, 102, 1)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
                img.style.boxShadow = '0 0 20px rgba(255, 51, 102, 0.5)';
            }, 500);
        });
    });
}

// Function to add new story dynamically (for index.html)
function addStory(title, content) {
    const storiesSection = document.getElementById('stories');
    if (storiesSection) {
        const newStory = document.createElement('div');
        newStory.className = 'story';
        newStory.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        storiesSection.appendChild(newStory);
    }
}

// Add example story if on index.html
if (document.getElementById('stories')) {
    addStory('The Velvet Whisper', 'A tale of silken caresses under dim lights...');
}

// Subscription page logic (for subscription.html)
const payBtn = document.getElementById('payBtn');
const signupForm = document.getElementById('signupForm');
const signupBtn = document.getElementById('signupBtn');

if (payBtn) {
    payBtn.addEventListener('click', () => {
        // Simulate UPI payment intent (replace with real UPI integration)
        const upiLink = 'upi://pay?pa=yourupi@okbank&pn=YourName&am=15&cu=INR';
        alert('Redirecting to UPI app... (Simulated for demo)');
        // For real integration, use: window.location.href = upiLink;

        // Simulate successful payment after 2 seconds
        setTimeout(() => {
            alert('Payment of ₹15 successful!');
            payBtn.style.display = 'none';
            signupForm.style.display = 'block';
        }, 2000);
    });
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (username && email && password) {
            alert(`Sign-up successful! Welcome, ${username}!`);
            // Redirect back to index.html or premium content
            window.location.href = 'index.html';
        } else {
            alert('Please fill in all fields.');
        }
    });
}