$(document).ready(function() {
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
