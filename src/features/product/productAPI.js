

export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`/products/`+id)
    const data  = await response.json()
    resolve({data})
}
    );
}
export function createProduct(product) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`/products/`,{
      method:`POST`,
      body:JSON.stringify(product),
      headers: {"content-type":"application/json"}
     })
    const data  = await response.json()
    resolve({data})
}
    );
}
export function updateProduct(update) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`/products/`+update.id,{
      method:`PATCH`,
      body:JSON.stringify(update),
      headers: {"content-type":"application/json"}
    })
    const data = await response.json()
    resolve({data})
}
    );
}
export function fetchProductsByFilters(filter,sort,pagination,admin) {
  let queryString=``;
  for(let Key in filter){
    const categoryValues=filter[Key];
    if(categoryValues.length){ 
      const lastCategoryValue=categoryValues[categoryValues.length-1]
      queryString+=`${Key}=${lastCategoryValue}&`
    }
   }
   for (let Key in sort){
    queryString+=`${Key}=${sort[Key]}&`
   }
   console.log(pagination,"yogesh")
   for (let Key in pagination){
    queryString+=`${Key}=${pagination[Key]}&`
   }
   if(admin){
    queryString+=`admin=true`
   }
  return new Promise(async (resolve) =>{
    const response = await fetch('/products?'+queryString)
    const data  = await response.json()
    const totalItems = await response.headers.get(`X-Total-Count`)
    resolve({data:{products:data,totalItems:+totalItems}})
}
    );
}

export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`/categories`)
    const data  = await response.json()
    resolve({data})
}
    );
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`/brands`)
    const data  = await response.json()
    resolve({data})
}
    );
}