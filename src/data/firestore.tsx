import { collection, getDocs } from "firebase/firestore";
import { Product } from "../models/product";
import { db } from "../firebase/fire";

export const fetchProducts = async (setState: Function) => {

    try {
      const querySnapshot = await getDocs(collection(db, "Products"));
      let productsList: Product[] = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const product = doc.data();
        productsList.push(new Product({
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl,
          category: product.category,
          isNew: product.isNew,
          price: product.price,
          sale: product.sale,
          productFeatures: product.product_feature,
          productOptions: product.product_options,
          dimensions: product.dimensions,
        }));
      });

      setState(productsList);
    } catch(e) {
      console.error('Error: '+e);
    }
}