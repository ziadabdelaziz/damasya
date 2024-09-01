import { useState } from "react";
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";
import { storage } from "../../firebase/fire";

const AddProductPage = () => {
    const [imageUpload, setImageUpload] = useState<File | null>(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const uploadFile = () => {
        if (imageUpload === null) {
          return;
        }
        const imageRef = storageRef(storage, `products/${'product'}`);
    
        uploadBytes(imageRef, imageUpload)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => {
                setImageUrl(url);
                console.log(url);
              })
              .catch((error) => {
                console.error(error.message);
              });
          })
          .catch((error) => {
            console.error(error.message);
          });
      };

    return ( 
        <form onSubmit={(e)=>{
                e.preventDefault();
                console.log('uploading');
                uploadFile();
            }}
            className="align-center pt-20 mx-10">
            <h1 className="text-center text-2xl mb-16 text-app-secondary">ADD PRODUCT</h1>
            <input
                placeholder="Choose image"
                accept="image/png,image/jpeg"
                type="file"
                className="block w-full"
                onChange={(e) => {
                    if (e !== null){
                        setImageUpload(e.target.files![0]);
                    }
                }}
            />
            <br />
            <label htmlFor='product-name' className="block mb-1 text-app-secondary">PRODCUT NAME</label>
            <input id="product-name" type="text" className="block bg-gray-200/70 h-11 w-full p-2 rounded-md focus:border-app-secondary focus:border-2 outline-none" />
            <br />
            <label htmlFor='price' className="block mb-1 text-app-secondary">PRICE</label>
            <input id="price" type="number" className="block bg-gray-200/70 h-11 w-full p-2 rounded-md focus:border-app-secondary focus:border-2 outline-none" />
            <br /><label htmlFor='name' className="block mb-1 text-app-secondary">PRODCUT NAME</label>
            <input id="name" type="text" className="block bg-gray-200/70 h-11 w-full p-2 rounded-md focus:border-app-secondary focus:border-2 outline-none" />
            <br />
            <button className="block m-auto py-2 px-4 bg-app-action text-app-primary rounded-md">ADD PRODUCT</button>
        </form>
     );
}

export default AddProductPage;