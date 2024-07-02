function getProducts(){
  return fetch("https://fakestoreapi.com/products")
    .then(ress => ress.json())
}

function getSingleProduct(){
  const param = new URLSearchParams(window.location.search)
  
  return fetch(`https://fakestoreapi.com/products/${param.get("productId").toString()}`)
    .then(ress => ress.json())
}

function getCategories(){
  return fetch('https://fakestoreapi.com/products/categories')
    .then(ress => ress.json())
}

function getProductByCategory(category){
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(ress => ress.json())
}
export { getProducts, getSingleProduct, getCategories, getProductByCategory }