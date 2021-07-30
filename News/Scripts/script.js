const newsUL = document.getElementById('newsUL')

const newsItem = news.articles.map(function(article) {
    const allNews = `
    <div class="news">
        <li class="newslist">
            <div class="article">
                <img src="${article.urlToImage} class = "newsImage" />
                <b>${article.title}</b>
                <b>Written By : ${article.author}</b>
                <p>${article.description}</p>
                <b><a href = "${article.url}">NewsLink</a></b>
                <b>Published: ${article.publishedAt}</b>
                <p>${article.content}</p>
            </div>
        </li>
    </div>`
    return allNews
})

newsUL.innerHTML = newsItem.join("")
