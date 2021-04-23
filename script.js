
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


  let links = app.post("/link-initialize", (req, res, next) => {
    console.log('body==initialize=', req.body);
    res.send({
        "canvas": {
            "content": {
                "components": [
                    {
                        "type": "link",
                        "visibleText": "Click Click Click",
                        "url": "https://google.com"
                    },
                    {
                        "type": "link",
                        "visibleText": "Click Click Click",
                        "url": "https://google.com",
                        "showLink": false
                    },
                    {
                        "type": "link",
                        "visibleText": "Click Click Click",
                        "url": "https://google.com",
                        "showLink": true
                    },
                    {
                        "type": "link",
                        "url": "https://google.com",
                        "showLink": false
                    },
                    {
                        "type": "link",
                        "url": "https://google.com",
                        "showLink": true
                    }
                ]
            }
        }
    });
});