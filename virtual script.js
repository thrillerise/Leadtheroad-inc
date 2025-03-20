$(document).ready(function() {
    $('#menu-icon').on('click', function() {
        $('.navbar').toggleClass('active');
    });
    
    $('.navbar a').on('click', function() {
        $('.navbar').removeClass('active');
    });

    /*$(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });*/

    $('#tours-dropdown').on('click', function(event) {
        event.preventDefault(); 
        $('.dropdown-menu').toggleClass('show');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#tours-dropdown').length && !$(event.target).closest('.dropdown-menu').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });
    
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;

        const name = $('#name').val().trim();
        if (name === '') {
            alert('Please enter your full name');
            isValid = false;
            return;
        }

        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            isValid = false;
            return;
        }
        
        const phone = $('#phone').val().trim();
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phone.replace(/[- )(]/g, ''))) {
            alert('Please enter a valid phone number');
            isValid = false;
            return;
        }

        const destination = $('#destination').val();
        if (destination === '') {
            alert('Please select a destination');
            isValid = false;
            return;
        }

        const travelDate = new Date($('#travelDate').val());
        const today = new Date();
        if (travelDate <= today) {
            alert('Travel date must be in the future');
            isValid = false;
            return;
        }

        const travelers = $('#travelers').val();
        if (travelers < 1 || travelers > 100) {
            alert('Number of travelers must be between 1 and 100');
            isValid = false;
            return;
        }
        
        if (isValid) {
            alert('Registration successful! We will contact you soon.');
            this.reset();
        }
    });

    $('#feedbackForm').on('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;

        const name = $('#feedbackName').val().trim();
        if (name === '') {
            alert('Please enter your full name');
            isValid = false;
            return;
        }

        const email = $('#feedbackEmail').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            isValid = false;
            return;
        }

        const feedbackType = $('#feedbackType').val();
        if (feedbackType === '') {
            alert('Please select a feedback type');
            isValid = false;
            return;
        }

        const message = $('#feedbackMessage').val().trim();
        if (message === '' || message.length < 10) {
            alert('Please enter a message (minimum 10 characters)');
            isValid = false;
            return;
        }

        const rating = $('#rating').val();
        if (rating < 1 || rating > 5) {
            alert('Rating must be between 1 and 5');
            isValid = false;
            return;
        }
        
        if (isValid) {
            alert('Thank you for your feedback!');
            this.reset();
        }
    });
});