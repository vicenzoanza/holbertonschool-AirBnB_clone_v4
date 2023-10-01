$(document).ready(function() {
    function updateApiStatus() {
        $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
            if (data.status === 'OK') {
                $('div#api_status').addClass('available');
            } else {
                $('div#api_status').removeClass('available');
            }
        });
    }

    updateApiStatus();

    $('input[type="checkbox"]').change(function() {
        const $amenities = $('div.amenities');
        const select = [];

        $('input[type="checkbox"]:checked').each(function() {
            const amenityName = $(this).attr('data-name');
            select.push(amenityName);
        });

        if (select.length > 0) {
            $amenities.find('h4').text(select.join(', '));
        } else {
            $amenities.find('h4').html('&nbsp;');
        }
    });
});
