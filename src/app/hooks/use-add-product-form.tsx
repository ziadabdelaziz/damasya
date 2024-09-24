import { ChangeEvent, useState } from "react";
import { db } from "../../firebase/fire";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { uploadImage } from "../../data/firestore";
import { useNavigate } from "react-router-dom";

export interface ImageData {
    data: File,
    url: string,
}

const useAddProductForm = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('sofa');
    const [isNew, setIsNew] = useState(false);
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [description, setDescription] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [productOptions, setProductOptions] = useState('');
    const [productFeatures, setProductFeatures] = useState('');
    const [newPrice, setnewPrice] = useState(0);
    const [haveImage, setHaveImage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getImage = (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const reader = new FileReader();
      let imageFile = e.target.files[0];

      reader.onload = (loadEvent) => {
        const fileUrl = loadEvent.target!.result as string;

        setImages((prevImages) => [
          ...prevImages,
          { data: imageFile, url: fileUrl }
        ]);

        setHaveImage(true);

        (e.target as HTMLInputElement).value = '';
      };

      reader.readAsDataURL(imageFile);
    };

    const deleteImage = (ndx: number) => {
      setImages(images.filter((_img, index) => index != ndx));
    }

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPrice(value);
        handleNewPrice(value, sale);
      };

    const handleSaleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSale(value);
      handleNewPrice(price, value);
    };

    const handleNewPrice = (updatedPrice: string, updatedSale: string) => {
      const currPrice = updatedPrice === '' ? 0 : parseFloat(updatedPrice);
      const currSale = updatedSale === '' ? 0 : parseFloat(updatedSale);

      setnewPrice(currPrice - ((currPrice * currSale) / 100))
    };

    const validateInput = () => {
      console.log('price: '+price+'\nname: '+name)
      if (images.length === 0) {
        window.scrollTo(0,0);
        setHaveImage(false);
        return;
      }

      if (name.trim().length === 0){
        return
      }

      if (price.length === 0){
        return
      }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      validateInput();
      
      setIsLoading(true);

      const timestamp = Timestamp.now().toMillis().toString();

      console.log('uploading Images')
      const imageUrlList = await Promise.all(
        images.map((image, index) => uploadImage(image.data, "products/"+name+timestamp+"/"+name+index))
      );
      console.log('images uploaded: '+imageUrlList);
      console.log('image: '+imageUrlList[0]);
      console.log('uploading product...');
      try {
        const destination = doc(collection(db, "Products"));

        const response = await setDoc(destination, {
          name: name,
          imagesUrl: imageUrlList,
          category: category,
          isNew: isNew,
          price: parseFloat(price),
          sale: parseFloat(sale),
          timestamp: timestamp,
          description: description,
          dimensions: dimensions,
          product_options: productOptions,
          product_features: productFeatures,
        })

        console.log(response);

        setIsLoading(false);
        navigate("/products");

      } catch(e) {
        console.log('error uploading product: '+e);
        alert("error uploading product!")
        setIsLoading(false);
      }

      console.log('product uploaded!')
    };


    return {
        images,
        name,
        category,
        isNew,
        price,
        sale,
        newPrice,
        description,
        dimensions,
        productOptions,
        productFeatures,
        haveImage,
        isLoading,
        setName,
        setCategory,
        setIsNew,
        setDescription,
        setDimensions,
        setProductOptions,
        setProductFeatures,
        getImage,
        deleteImage,
        handlePriceChange,
        handleSaleChange,
        handleSubmit,
    };
}

export default useAddProductForm;