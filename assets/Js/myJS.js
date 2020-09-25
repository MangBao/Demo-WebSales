window.onload = () => {
    var modal = document.getElementById('myModal');
    var sign_up = document.getElementById('sign-up');
    var sign_in = document.getElementById('sign-in');
    var s_up = document.getElementById('s-up');
    var s_in = document.getElementById('s-in');
    var back_1 = document.getElementsByClassName('back')[0];
    var back_2 = document.getElementsByClassName('back')[1];


    var user = [];

    s_in.onclick = (e) => {
        e.preventDefault();
        var a = $('#a').val();
        var b = $('#b').val();

        user[0] = {
            username: 'admin',
            password: '1234'
        }
        for (var i = 0; i <= user.length; i++) {
            if ((a == user[0].username) && (b == user[0].password)) {
                // $('#ad').css('display', 'block');
                $('li').removeClass('class_none');
                sign_up.style.display = 'none';
                sign_in.style.display = 'none';
                modal.style.display = 'none';
            }
        }
    };

    function Login(){
        // for (var i = 0; i <= user.length; i++) {
        //     if ((a == user[0].username) && (b == user[0].password)) {
        //         // $('#ad').css('display', 'block');
        //         $('li').removeClass('class_none');
        //         sign_up.style.display = 'none';
        //         sign_in.style.display = 'none';
        //         modal.style.display = 'none';
        //     }
        // }
    }
    sign_up.onclick = (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        $('#s_in').css('display', 'none');
    };

    sign_in.onclick = (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        $('#s_up').css('display', 'none');
    };

    back_1.onclick = (e) => {
        e.preventDefault();
        $('#s_in').css('display', 'block');
        $('#s_up').css('display', 'none');
    };

    back_2.onclick = (e) => {
        e.preventDefault();
        $('#s_in').css('display', 'none');
        $('#s_up').css('display', 'block');
    };


}