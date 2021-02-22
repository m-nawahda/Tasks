function getRooms() {

    var promise = new Promise(function (myResolve) {

        if (document.readyState == "complete") {
            myResolve()
        }
    })

    promise.then(
        async function () {
            let response = await fetch("https://api.jsonbin.io/b/60323b2ea3e9f25d023d11f2");
            if (response.ok) {
                let data = await response.json();
                console.log(data)
                for (x in data) {
                 /*    var itemContainer = document.createElement('div');
                    itemContainer.className = "item-container";
                    var item = document.createComment('div');
                    item.className = "item";
                    var image = document.createElement('img');
                    image.src = "images/" + data[x].url + ".jpg";
                    image.onerror = "error(this)";
                    image.alt = data[x].name;
                    var nameContainer = document.createElement('h2');
                    nameContainer.innerHTML = data[x].name;
                    var horizontalLine = document.createElement('hr');
                    var descriptionContainer =  document.createElement('p');
                    description.innerHTML = data[x].description;
                    item.appendChild(image);
                    item.appendChild(nameContainer);
                    item.appendChild(horizontalLine);
                    item.appendChild(descriptionContainer);
                    itemContainer.appendChild(item)
                    document.getElementById('main-content').appendChild(itemContainer);
                    var itemContainer = $(
                        '<div class="item-container">\
                        <div class="item">\
                                <img onerror="error(this)"src="images/' + data[x].url + '.jpg" alt=' + data[x].name + ' />\
                                <h2 class="item-name">' + data[x].name + '</h2>\
                                <hr>\
                                <p>' + data[x].description + '</p>\
                         </div>\
                         </div>');
                    $(".main-content").append(itemContainer); */
                    document.getElementById('main-content').innerHTML += '<div class="item-container">\
                    <div class="item">\
                            <img onerror="error(this)"src="images/' + data[x].url + '.jpg" alt=' + data[x].name + ' />\
                            <h2 class="item-name">' + data[x].name + '</h2>\
                            <hr>\
                            <p>' + data[x].description + '</p>\
                     </div>\
                     </div>'
                }
            } else {
                log("Http-Error" + response.status);
            }
        }
    )
}

function error(obj) {
    obj.src = "images/error.png";
}