$(document).ready(function() {
    $('#menu-icon').on('click', function() {
        $('.navbar').toggleClass('active');
    });

    $('.navbar a').on('click', function() {
        $('.navbar').removeClass('active');
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('#tours-dropdown').on('click', function(event) {
        event.preventDefault();
        $('.dropdown-menu').toggleClass('show');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#tours-dropdown').length && !$(event.target).closest('.dropdown-menu').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });

    $(".accordion-header").click(function() {
        let $item = $(this).parent();
        let isActive = $item.hasClass("active");

        $(".accordion-item").removeClass("active");

        if (!isActive) {
            $item.addClass("active");
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

    // Booking & Ticket Validation
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let output = month + '/' + day + '/' + year;

    function compareDate() {
        if (Date.parse($("#bookingdate").val()) < Date.parse(output)) {
            alert("You cannot select a date less than the current date");
        }
    }

    function total() {
        let num = $("#num").val();
        let price = $("#price").val();

        if (num > 50) {
            alert("You cannot book more than 50 tickets at a time");
            $("#num").val('');
        } else {
            $("#totalprice").val(price * num);
        }
    }

    function check() {
        let price;
        if ($("#RB1").is(":checked")) {
            price = 100;
        } else if ($("#RB2").is(":checked")) {
            price = 140;
        } else if ($("#RB3").is(":checked")) {
            price = 200;
        }
        $("#price").val(price);
    }

    function sub() {
        let usrname = $("#usrname").val();
        let num = $("#num").val();
        let bookingdate = $("#bookingdate").val();
        let sel = $("#sel").val();
        let timing = $("#timing").val();

        if (usrname !== '' && num !== '' &&
            Date.parse(bookingdate) > Date.parse(output) &&
            sel != 0 && timing != 7) {
            alert("Your tickets have been booked.");
        }
    }

    function validate() {
        let bookingdate = $("#bookingdate").val();
        let sel = $("#sel").val();
        let timing = $("#timing").val();

        if (sel == 0 || timing == 7 || Date.parse(bookingdate) < Date.parse(output)) {
            alert("Please select the date, movie name, and movie timings.");
            return false;
        }
        return true;
    }

    // Attach event listeners
    $("#bookingdate").on("change", compareDate);
    $("#num").on("input", total);
    $("input[name='RB']").on("change", check);
    $("#submitBtn").on("click", sub);
    $("#form1").on("submit", validate);
});
