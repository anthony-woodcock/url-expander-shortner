//api key AIzaSyAn_Yo9LabkG3IOTNWT30u_NiHkjUa2nHk

//Expand

document.getElementById('expand').addEventListener
('click', expandUrl)


function expandUrl(){
    const textUrl = document.getElementById("urlInput").value

    fetch(`https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAn_Yo9LabkG3IOTNWT30u_NiHkjUa2nHk&shortUrl=${textUrl}`)
        .then(response => {
            if(response.status !== 200) {
                throw new Error('Response status not 200, please enter a valid link')
            }

            return response.json()
        })
        .then(responseJson => document.getElementById("urlInput").value = innerHTML = responseJson.longUrl)
        
}

//Shorten

document.getElementById('shorten').addEventListener
('click', shortenUrl)

function shortenUrl(){
    const textUrl = document.getElementById("urlInput").value
    
    fetch(`https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAn_Yo9LabkG3IOTNWT30u_NiHkjUa2nHk&shortUrl=${textUrl}`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            longUrl: textUrl
        })
    })
    .then(response => {
        if(response.status !== 200) {
            throw new Error('Response status not 200, please enter a valid link')
        }

        return response.json()
    })
    .then((responseJson) => document.getElementById("urlInput").value = innerHTML = responseJson.id)

}

