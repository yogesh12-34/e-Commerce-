
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:8080/products`)
    const data  = await response.json()
    resolve({data})
}
    );
}
export function fetchProductsByFilters(filter,sort,pagination) {
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
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data  = await response.json()
    const totalItems = await response.headers.get(`X-Total-Count`)
    resolve({data:{products:data,totalItems:+totalItems}})
}
    );
}

export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:8080/categories`)
    const data  = await response.json()
    resolve({data})
}
    );
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:8080/brands`)
    const data  = await response.json()
    resolve({data})
}
    );
}