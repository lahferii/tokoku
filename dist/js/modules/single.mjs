import { getSingleProduct } from "./request.mjs";
import { createCard } from "./element.mjs";
import { getProductByCategory } from "./request.mjs";

async function showSingleProduct(){
  const product = await getSingleProduct()

  createSingle(product)
  suggestion()
}

async function suggestion(){
  const heading = document.querySelector(".suggest-heading")
  const title = document.createElement("h2")
  title.classList.add("suggest-title")
  title.textContent = `Recommendations for you`
  heading.appendChild(title)
  
  const param = new URLSearchParams(window.location.search)

  const arr = []
  const suggest = await getProductByCategory(param.get("category"))
  suggest.forEach(target => {
    if(target.id == param.get("productId").toString()){
      return
    } else {
      arr.push(target)
    }
  })
  console.log(arr)
  const parent = document.querySelector(".suggest-wrapper")
  createCard(arr, parent)
}

function createSingle(p){
  const imgParent = document.querySelector(".img-section")

  const img = document.createElement("img")
  img.src = p.image
  img.alt = "Product Image"
  img.classList.add("single-img")
  imgParent.appendChild(img)

  const textParent = document.querySelector(".text-section")

  const singleHeading = document.createElement("div")
  singleHeading.classList.add("single-heading-wrapper")
  textParent.appendChild(singleHeading)

  const title = document.createElement("h1")
  title.classList.add("single-heading")
  title.textContent = p.title

  const rate = document.createElement("span")
  rate.classList.add("single-rating")
  rate.textContent = `⭐${p.rating.rate} | ${p.rating.count} terjual`
  
  
  const description = document.createElement("p")
  description.classList.add("single-description")
  description.textContent = p.description
  
  const button = document.createElement("button")
  button.classList.add("single-price")
  button.textContent = `$${p.price}`
  
  singleHeading.appendChild(title)
  singleHeading.appendChild(rate)
  textParent.appendChild(description)

  // create button
  const buttonGroup = document.createElement("div")

  buttonGroup.classList.add("btn-group")
  textParent.appendChild(buttonGroup)

  const qtyGroup = document.createElement("div")
  qtyGroup.classList.add("qty-group")
  buttonGroup.appendChild(qtyGroup)

  const min = document.createElement("button")
  min.onclick = () => {
    if(parseInt(num.textContent) == 1){
      return false
    } else {
      num.textContent = parseInt(num.textContent) - 1
      price.textContent = `$${p.price * parseInt(num.textContent)}`
    }
  }
  min.classList.add("min")
  min.textContent = "-"
  qtyGroup.appendChild(min)
  
  const num = document.createElement("button")
  num.classList.add("num")
  num.textContent = 1
  qtyGroup.appendChild(num)
  
  const plus = document.createElement("button")
  plus.onclick = () => {
    num.textContent = parseInt(num.textContent) + 1
    price.textContent = `$${p.price * parseInt(num.textContent)}`
  }
  plus.classList.add("plus")
  plus.textContent = "+"
  qtyGroup.appendChild(plus)

  const price = document.createElement("button")
  price.classList.add("single-price")
  price.textContent = `$${p.price}`
  price.onclick = () => {
    window.location.href = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
  }
  buttonGroup.appendChild(price)
  // create button
}

export {showSingleProduct}