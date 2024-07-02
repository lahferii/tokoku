import { getProducts } from "./request.mjs"
import { clearCard, createCard } from './element.mjs'

async function showProducts(){
  const parent = document.querySelector(".wrapper")
  clearCard(parent)
  
  const products = await getProducts()
  createCard(products, parent)
}

export {showProducts}