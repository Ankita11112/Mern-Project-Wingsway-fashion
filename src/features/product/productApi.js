export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/"+id);
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function fetchProductsByFilters({filter , sort , pagination}) {
  //filter = {"category" : ["smartPhone" , "laptops"]}
  // sort = {_sort = "price"}
  // pagination = {_page: 1, _per_page = 10}
  // on server we will support multi values in filter
  let queryString = '';
  //filter
  for (let key in filter) {
    const categoryValues = filter[key];
    if(categoryValues.length > 0){
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString += `${key}=${lastCategoryValue}&`
    } 
  }
  //sorting
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }
//pagination
console.log(pagination)
for(let key in pagination){
  queryString += `${key}=${pagination[key]}&`
}

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products?"+queryString);
    const data = await response.json();
    const products = data.data;
    const totalItems = data.items;
    resolve({data: {products: products, totalItems:totalItems}})
  }
  );
}

 //category
 export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/category");
    const data = await response.json();
    resolve({ data })
  }
  );
}

//brands
export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data })
  }
  );
}

