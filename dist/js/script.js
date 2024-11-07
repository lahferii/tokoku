import { showProducts } from "./modules/product.mjs"
import { showCategories } from "./modules/category.mjs"
import { showSingleProduct } from "./modules/single.mjs"

if(window.location.pathname == "/" || window.location.pathname == "/index.html"){
  showCategories()
  showProducts()
}
else if(window.location.pathname == "/single" || window.location.pathname == "/single.html"){
  showSingleProduct()
}
