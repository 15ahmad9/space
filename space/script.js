let searchButton = document.querySelector("#search")


searchButton.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
})



async function sendApiRequest() {
    let API_KEY = "A2duc4qtrKHp7ptCSu8KYAG6148GE7jgzNvM7Xcj"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}



function useApiData(data) {
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src ="${data.url}">`
    document.querySelector("#content").innerHTML += data.title
}

