async function getRooms() {
    try {
        let response = await fetch("https://api.jsonbin.io/b/60323b2ea3e9f25d023d11f2");
        let data = await response.json();
        data.map((room) => {
            var itemContainer = document.createElement('div');
            itemContainer.className = "item-container";
            var item = document.createElement('div');
            item.className = "item";
            var image = document.createElement('img');
            image.src = "images/" + room.url + ".jpg";
            image.onerror = function () {
                error(image)
            };
            image.alt = room.name;
            var nameContainer = document.createElement('h2');
            nameContainer.innerHTML = room.name;
            var horizontalLine = document.createElement('hr');
            var descriptionContainer = document.createElement('p');
            descriptionContainer.innerHTML = room.description;
            item.appendChild(image);
            item.appendChild(nameContainer);
            item.appendChild(horizontalLine);
            item.appendChild(descriptionContainer);
            itemContainer.appendChild(item)
            document.getElementById('main-content').appendChild(itemContainer);
        })
    } catch (err) {
        console.log(err);
    }
}

function error(obj) {
    obj.src = "images/error.png";
}