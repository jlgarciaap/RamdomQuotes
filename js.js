"use strict";

var quote = '', author = '';

function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "nZRUYIX9UDmshdpZJWXy6T7u3ubvp18piCZjsnJgyIhpDpyixi",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat="famous"',
        success: function(response) {
            var r = response;


           quote = r.quote;
          author = r.author;

            $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='
                + '"' + quote + '" ' + author);

            $(".text").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('#text').text("  "+ r.quote + "  ");
                });

            $(".author").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('#author').html(r.author);
                });

            }

    });
}
$(document).ready(function() {

    getQuote();
    //Se llama nada mas cargar la pagina

    $('#new').on('click', getQuote);
    //Se llama cada vez que pulsamos el boton

});
