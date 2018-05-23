import axios from 'axios';

export function productById(id, auth){
    const product = axios.get(`https://yves.fashion/wp-json/wc/v1/products/${id}`,{
        headers: {
            Authorization: auth
        }
    })
    return product
}
export function products(auth){
    const product = axios.get(`https://yves.fashion/wp-json/wc/v1/products?per_page=10`,{
        headers: {
            Authorization: auth
        }
    })
    return product
}