$(document).ready(function () {
    $.ajax({
        url: "https://api.jsonbin.io/b/60323b2ea3e9f25d023d11f2",
        method: "GET",
        data: {},
        success: function (data) {
            console.log(data);
            $(".main-content").empty();
            for (x in data) {
                var itemContainer = $(
                    '<div class="item-container col-sm-6 col-md-4 col-lg-3">\
                    <div class="item">\
                            <img onerror="error(this)"src="images/' + data[x].url + '.jpg" alt=' + data[x].name + ' />\
                            <h2 class="item-name">' + data[x].name + '</h2>\
                            <hr>\
                            <p>' + data[x].description + '</p>\
                     </div>\
                     </dov>');
                $(".main-content").append(itemContainer);
            }
        },
        error: function (data) {},

        complete: function () {},
    });

})
function error(obj){
    obj.src="images/error.png";
}