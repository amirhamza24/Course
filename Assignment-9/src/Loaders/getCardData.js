import { getStoredCart } from "../utilities/fakeDb";

export const productsAndCartData = async () => {
    const productsData = await fetch('/jobData.json')
    const products = await productsData.json()
    
    const savedCart = getStoredCart();
    let cartArray = [];

    for(const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if(foundProduct) {
            foundProduct.quantity = savedCart[id];
            cartArray.push(foundProduct); 
        }   
    }
    return { cartArray, products }
}