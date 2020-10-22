"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', (res)=>{
        $('#fortune-text').text(res);
    }
    ) 
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
       
        $('#weather-info').text(res['forecast']);
    }
    )
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    const formInputs = {
        'qty': $('#qty-field').val(),
        'melon_type': $('#melon-type-field').val()
    };
    $.post('/order-melons.json', formInputs, (res)=> {
        
        if (res['code'] === 'ERROR') {
            $('#order-status').addClass('order-error');
        }

        $("#order-status").text(res['code']);
        $("#order-status").text(res['msg']);
    })
}
    // selector = #order-status classname = .order-error
    // $(selector).removeClass('classname')
    // $(selector).addClass('classname')
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)


$("#order-form").on('submit', orderMelons);


