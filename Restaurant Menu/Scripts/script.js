
const startersUL = document.getElementById("startersUL")
const entreesUL = document.getElementById("entreeUL")
const dessertsUL = document.getElementById("dessertUL")
const startersBtn = document.getElementById("starterBtn")
const entreesBtn = document.getElementById("entreeBtn")
const dessertsBtn = document.getElementById("dessertBtn")
const menuUL = document.getElementById("menuUL")




let starters = dishes.filter(function(dish) {
    return dish.course == "Starters"
})
startersBtn.addEventListener("click",function(){
    startersUL.innerHTML=""

        let starterItems = starters.map(function(dish) {
            return `<li class="starterItem">
                <img src="${dish.imageURL}">
                <div class="dishInfo">
                    <b>${dish.title}</b>
                    <p>${dish.description}</p>
                </div>
                <p>${dish.price}</p>
                </li>
         `
        })
    startersUL.innerHTML = starterItems.join("")
})





let entrees = dishes.filter(function(dish) {
    return dish.course == "Entrees"
})
entreesBtn.addEventListener("click", function() {
    entreesUL.innerHTML=""

        let entreeItems = entrees.map(function(dish) {
            return `<li class="entreeItem">
                    <img src="${dish.imageURL}">
                    <div class="dishInfo">
                        <b>${dish.title}</b>
                        <p>${dish.description}</p>
                    </div>
                    <p>${dish.price}</p>
                    </li>
            `
        })
    entreesUL.innerHTML = entreeItems.join("")
})






dessertsBtn.addEventListener("click", function() {
    dessertsUL.innerHTML = ""
})
let desserts = dishes.filter(function(dish) {
    return dish.course =='Desserts'
})
let dessertItems = desserts.map(function(dish) {
    return `<li class="dessertItem">
            <img src="${dish.imageURL}">
            <div class="dishInfo">
                <b>${dish.title}</b>
                <p>${dish.description}</p>
            <p>${dish.price}</p>
            </li>
    `
})
dessertsUL.innerHTML = dessertItems.join("")



let menuArr=dishes
console.log(dishes)

for(let i=0;i<menuArr.length;i++){
    const menu=menuArr[i]

    const menuItem=`
        <li>
            <div>
                <img src= ${menu.imageURL} width=150px height=150px/>
                <h1>${menu.title}</h1>
                <p>${menu.description}</p>
                <label>${menu.price}</label>
            </div>
        </li>
    `
    menuUL.insertAdjacentHTML('beforeend',menuItem)
}