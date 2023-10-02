$(document).ready(function () {
    function updateApiStatus() {
        $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
            if (data.status === 'OK') {
                $('div#api_status').addClass('available');
            } else {
                $('div#api_status').removeClass('available');
            }
        });
    }

    function searchPlaces() {
        const searchParams = {};

        const states = $('input[name="states"]').val();
        if (states) {
            searchParams.states = states.split(',').map(state => state.trim());
        }

        const cities = $('input[name="cities"]').val();
        if (cities) {
            searchParams.cities = cities.split(',').map(city => city.trim());
        }

        const amenities = $('input[name="amenities"]:checked').map(function () {
            return $(this).val();
        }).get();

        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            contentType: 'application/json',
            data: JSON.stringify(searchParams),
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.error(error);
            }
        });
    }

    $('button').click(function () {
        searchPlaces();
    });
});

updateApiStatus();
