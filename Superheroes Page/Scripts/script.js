
const moviesUL = document.getElementById("moviesUL")
const moviesBox = document.getElementById("movieBox")

let request = new XMLHttpRequest()

request.addEventListener('load', function(){
    const postsAPI = JSON.parse(this.responseText)
    const posts = postsAPI.Search
    const movieItems= posts.map(function(post) {
        return movieItem = `<li>
                            <img src="${post.Poster}"><br>
                            <b>
                            <div id="title">${post.Title}</div></b><br>
                            </li>`
    })
    moviesUL.innerHTML = movieItems.join("")
    
})

request.open('GET', "https://www.omdbapi.com/?s=hulk&apikey=db882510")
request.send()