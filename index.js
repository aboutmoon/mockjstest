//https://github.com/nuysoft/Mock/wiki
$(function () {
    $('.btn').on('click', function () {
        $.ajax({
            url: $(this).text(),
            success: function (data) {
                $('#result').JSONView(data)
            }
        })
    })
})