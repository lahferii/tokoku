import { getCategories, getProductByCategory } from "./request.mjs"
import { clearCard, createCard } from "./element.mjs"

async function showCategories(){
  const cat = await getCategories()
  
  const parent = document.querySelector(".cat")
  cat.forEach(element => {
    const category = document.createElement("button")
    category.textContent = element
    category.onclick = async () => {
      const products = await getProductByCategory(element)
      const parent = document.querySelector(".wrapper")

      clearCard(parent)
      createCard(products, parent)

    }
    category.classList.add("category")
    parent.appendChild(category)
  })
}

export { showCategories }