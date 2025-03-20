$(document).ready(function() {
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
        
        if (num > 20) {
            alert("You cannot book more than 20 tickets at a time");
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
