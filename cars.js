

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

   
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
    
    // Close the modal when the X or Close is clicked
    document.querySelector(".close").onclick = function() {
        modal.style.display = "none";
    };
    
    document.getElementById("closeBtn").onclick = function() {
        modal.style.display = "none";
    };

    // for closing modal by clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});



////
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const rentalPeriod = document.getElementById("rental-period").value;

    if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Please enter a valid name.");
        event.preventDefault();
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email.");
        event.preventDefault();
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault();
    }

    if (rentalPeriod < 1) {
        alert("Rental period must be at least 1 day.");
        event.preventDefault();
    }
});



////car rent total price

    const dailyRate = 1200; // Daily rental rate
    const rentalPeriodInput = document.getElementById("rental-period");
    const totalPriceDisplay = document.getElementById("total-price");

    rentalPeriodInput.addEventListener("input", function() {
        const rentalPeriod = parseInt(rentalPeriodInput.value);
        if (rentalPeriod && rentalPeriod > 0) {
            const totalPrice = rentalPeriod * dailyRate;
            totalPriceDisplay.textContent = `$${totalPrice.toLocaleString()}`;
        } else {
            totalPriceDisplay.textContent = "$0";
        }
    });
    /////



    



