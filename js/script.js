// Feature 1: Add to Cart
var cartCount = 0;

function addToCart(productName) {
    cartCount++;
    var cartMsg = document.getElementById('cartMsg');
    cartMsg.style.display = 'block';
    cartMsg.innerText = productName + ' added to cart! 🛒 (' + cartCount + ' items)';
    setTimeout(function() {
        cartMsg.style.display = 'none';
    }, 3000);
}

// Feature 2: Dark/Light Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var btn = document.getElementById('darkBtn');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = 'Light Mode';
    } else {
        btn.innerText = 'Dark Mode';
    }
}

// Feature 3: Filter Products
function filterProducts(category) {
    var cards = document.querySelectorAll('.product-card');
    var buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    document.getElementById('btn-' + category).classList.add('active');

    cards.forEach(function(card) {
        if (category === 'all') {
            card.style.display = 'block';
        } else if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Feature 4: Form Validation
function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMsg = document.getElementById('errorMsg');
    var successMsg = document.getElementById('successMsg');

    errorMsg.innerText = '';
    successMsg.innerText = '';

    if (name === '') {
        errorMsg.innerText = 'Please enter your name!';
        return false;
    }

    if (!email.includes('@')) {
        errorMsg.innerText = 'Please enter a valid email!';
        return false;
    }

    if (message.length < 10) {
        errorMsg.innerText = 'Message must be at least 10 characters!';
        return false;
    }

    successMsg.innerText = 'Message sent successfully! We will get back to you soon 😊';
    return true;
}
