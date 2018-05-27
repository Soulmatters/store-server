import axios from 'axios';

export function productById(slug, auth){
    const product = axios.get(`https://yves.fashion/wp-json/wc/v1/products/?slug=${slug}`,{
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