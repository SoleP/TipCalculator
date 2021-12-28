function calculate () {

    var amount = $('#amount').val(); // $ JQuery biblioteca
    var percentage = $('#percentage').val();
    var tip = amount * (percentage / 100);
    var total = Number(amount) + tip; 

        $('#tip').val( tip.toFixed(2) ); //dos digitos de numero decimales
            $('#total').val( total.toFixed(2) );

            return false;
}

$('#calculator').submit( calculate );


