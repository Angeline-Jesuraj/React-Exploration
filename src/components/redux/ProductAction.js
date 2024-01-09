import { PRODUCT_LIST} from "./constant"

export const productList=async()=>{
    let data= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    data=await data.json();
    console.warn("product action is called")
    return {
        type:PRODUCT_LIST,
        data
}

}