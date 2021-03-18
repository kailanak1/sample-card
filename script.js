
let img_url = "https://randomfox.ca/floof/"
let response = fetch(img_url)
response
  .then(response => response.json())
  .then(data => {
        let img = document.createElement('img'); 
            console.log(data.image)
            img.src = data.image
            img.width = 200
            document.getElementById('img').appendChild(img); 
    })
