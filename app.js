//api key AIzaSyAn_Yo9LabkG3IOTNWT30u_NiHkjUa2nHk

// const shortenUrl = {
//     method: 'POST',
//     headers: new Headers({
//         'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({
//         longUrl: document.querySelector('.url-input').value
//     })
// }

//Expand

document.getElementById('expand').addEventListener
('click', expandUrl)


function expandUrl(){
    const textUrl = document.getElementById("urlInput").value
    console.log(textUrl)

    fetch(`https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAn_Yo9LabkG3IOTNWT30u_NiHkjUa2nHk&shortUrl=${textUrl}`)
        .then(response => {
            if(response.status !== 200) {
                throw new Error('Response status not 200')
            }

            return response.json()
        })
        .then(responseJson => console.log(responseJson))
}

