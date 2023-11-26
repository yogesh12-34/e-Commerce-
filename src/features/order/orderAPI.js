export function createOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:8080/orders`,{
      method:`POST`,
      body:JSON.stringify(order),
      headers: {"content-type":"application/json"}
    })
    const data = await response.json()
    resolve({data})
}
    );
}
export function updateOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:8080/orders/`+order.id,{
      method:`PATCH`,
      body:JSON.stringify(order),
      headers: {"content-type":"application/json"}
    })
    const data = await response.json()
    resolve({data})
}
    );
}
export function fetchAllOrders({sort,pagination}) {
  let queryString=``;
  for(let Key in sort){
    queryString+=`${Key}=${sort[Key]}&`
  }
  for (let Key in pagination){
    queryString+=`${Key}=${pagination[Key]}&`
   }
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders?'+queryString)
    const data  = await response.json()
    const totalOrders = await response.headers.get(`X-Total-Count`)
    resolve({data:{products:data,totalOrders:+totalOrders}})
}
    );
}