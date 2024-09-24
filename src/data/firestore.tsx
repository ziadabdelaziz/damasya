import { collection, getDocs } from "firebase/firestore";
import { Product } from "../models/product";
import { db } from "../firebase/fire";
import { storage } from "../firebase/fire";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";

export const fetchProducts = async (setState: Function) => {

    try {
      const querySnapshot = await getDocs(collection(db, "Products"));
      let productsList: Product[] = [];

      querySnapshot.forEach((doc) => {
        const product = doc.data();

        productsList.push(new Product({
          id: doc.id,
          name: product.name,
          imagesUrl: product.imagesUrl,
          category: product.category,
          isNew: product.isNew,
          price: product.price,
          sale: product.sale,
          productFeatures: product.product_feature,
          productOptions: product.product_options,
          dimensions: product.dimensions,
          description: product.description,
          timestamp: product.timestamp,
        }));
      });

      setState(productsList);
    } catch(e) {
      console.error('Error: '+e);
    }
}

export const uploadImage = async (imageFile: File, destination: string) : Promise<string> => {
  const imageRef = storageRef(storage, destination);

  try {
    const snapshot = await uploadBytes(imageRef, imageFile);

    const imageUrl = await getDownloadURL(snapshot.ref);
    
    return imageUrl;

  } catch (error) {
    console.error('Error uploading image: ', error);
    throw "image upload error:"+error;
  }
}

export const uploadProduct = () => {

}