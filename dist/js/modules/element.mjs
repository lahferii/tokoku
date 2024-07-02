function clearCard(parent){
  while(parent.firstChild){
    parent.firstChild.remove(parent.firstChild)
  }
}

function createCard(p, t){
  p.forEach(p => {
    const card = document.createElement("a")
    
    card.href = `./single.html?productId=${p.id}&category=${p.category}`
    card.classList.add("card")
    card.classList.add("group")
  
    const innerCard = document.createElement("div")
    innerCard.classList.add("inner-card")
    card.appendChild(innerCard)
  
    const imgWrap = document.createElement("div")
    imgWrap.classList.add("image-wrap")
    innerCard.appendChild(imgWrap)
    
    const img = document.createElement("img")
    img.src = p.image
    img.alt = "Product Image"
    img.classList.add("product-img")
    
    const textWrap = document.createElement("div")
    textWrap.classList.add("text-wrapper")
    innerCard.appendChild(textWrap)
    
    const title = document.createElement("p")
    let str = p.title.split("")
    for(let i = 0; i < str.length; i++){
      if(i <= 20){
        title.textContent = p.title
      } else {
        const truncated = str.slice(0, 20)
        const finalText = truncated.join("")
        title.textContent = `${finalText}...`
      }
    }
    title.classList.add("title")
    
    const price = document.createElement("p")
    price.textContent = `$${p.price}`
    price.classList.add("price")
  
    const ratingBox = document.createElement("div")
    ratingBox.classList.add("rating-box")
    
    const rating = document.createElement("span")
    rating.classList.add("rating")
    rating.textContent = `⭐${p.rating.rate} | ${p.rating.count} terjual`
    
    imgWrap.appendChild(img)
    textWrap.appendChild(title)
    textWrap.appendChild(price)
    textWrap.appendChild(ratingBox)
    ratingBox.appendChild(rating)
    t.appendChild(card)
  })
}

export {clearCard, createCard}