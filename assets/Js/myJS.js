$(document).ready(function() {
    var modal_1 = document.getElementById('myModal1');
    var modal_2 = document.getElementById('myModal2');

    $('.sign-up').click(function(e) {
        e.preventDefault();
        modal_1.style.display = 'block';
    });

    $('.sign-in').click(function(e) {
        e.preventDefault();
        modal_2.style.display = 'block';
    });

    $('.back_1').click(function(e) {
        e.preventDefault();
        modal_2.style.display = 'block';
    });

    $('.back_2').click(function(e) {
        e.preventDefault();
        modal_1.style.display = 'block';
    });

    $('#myModal1').click(function(e) {
        e.preventDefault();
        modal_1.style.display = 'none';
    });

    $('#myModal2').click(function(e) {
        e.preventDefault();
        modal_2.style.display = 'none';
    });
});