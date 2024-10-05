document.addEventListener("DOMContentLoaded", function() {
    // Function to validate user input
    function validateInput() {
        var username = document.getElementById('username').value.trim();
        var paymentMode = document.getElementById('payment-mode').value;
        var creditCard = document.getElementById('credit-card').value.trim();
        var errorMessage = document.getElementById('error-message');

        // Reset error message
        errorMessage.textContent = '';

        // Validate username
        if (!username) {
            errorMessage.textContent = 'Please enter a username.';
            return;
        }

        // Validate payment mode
        if (paymentMode === '') {
            errorMessage.textContent = 'Please select a mode of payment.';
            return;
        }

        // Validate credit card
        if (paymentMode === 'credit_card' && !validateCreditCard(creditCard)) {
            errorMessage.textContent = 'Please enter a valid credit card number.';
            return;
        }

        // If all input is valid
        errorMessage.textContent = 'Input is valid!';
    }

    // Function to validate credit card using Luhn algorithm
    function validateCreditCard(creditCard) {
        var sum = 0;
        var doubleUp = false;
        for (var i = creditCard.length - 1; i >= 0; i--) {
            var digit = parseInt(creditCard.charAt(i), 10);
            if (doubleUp) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            doubleUp = !doubleUp;
        }
        return (sum % 10) === 0;
    }

    // Attach event listener to validate button
    document.getElementById('validate-btn').addEventListener('click', validateInput);
});
