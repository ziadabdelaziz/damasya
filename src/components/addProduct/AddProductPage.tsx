import useAddProductForm from "../../app/hooks/use-add-product-form";
import DropdownMenu from "./DropdownMenu";
import ImagesInput from "./ImagesInput";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { InfinitySpin } from "react-loader-spinner";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const AddProductPage = () => {
  
  const {
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
  } = useAddProductForm();

  const categoryOptions = ['sofa', 'l-shape sofa', 'salon', 'bedroom', 'table'];
  const inputCategory = useLocation().state;

  useEffect(() =>{
    console.log(inputCategory)
    window.scrollTo(0,0);
    if (inputCategory == 'new') {
      setIsNew(true);
    } else {
      setCategory(inputCategory ?? category);  
    }
  }, [])

  return (
      isLoading
      ? <div className="grid place-items-center h-screen">
          <span className="h-1/3"><InfinitySpin color="#711D1B" /></span>
      </div>
      : <form
        onSubmit={handleSubmit}
        className="align-center pt-24 mx-8 sm:max-w-screen-sm sm:m-auto sm:px-8"
      >
        <h1 className="text-center text-2xl mb-10 text-app-secondary">ADD PRODUCT</h1>
        {/* Image Upload */}
        <ImagesInput images={images} uploadImage={getImage} deleteImage={deleteImage} haveImage={haveImage}/>
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor='product-name' className="inline-block mb-1 text-app-secondary">PRODUCT NAME</label>
          <input 
            required id="product-name" type="text" value={name} onChange={(e)=>setName(e.target.value)}
            className="block bg-gray-200/70 h-11 w-full p-2 rounded-md focus:border-app-secondary focus:border-2 outline-none"
          />
        </div>
        {/* Category */}
        <div className="mb-4">
          <label htmlFor='category' className="inline-block mb-1 text-app-secondary">CATEGORY</label>
          <DropdownMenu selected={category} setState={setCategory} options={categoryOptions}></DropdownMenu>
        </div>
        {/* New Collection */}
        <div className="items-top flex space-x-2 mb-4">
          <div className="">
          {
            isNew
            ? <span ><IoCheckbox className="inline-block text-app-secondary mr-2 h-6 w-6" onClick={()=>setIsNew(!isNew)} /></span>
            : <span ><MdCheckBoxOutlineBlank className="inline-block text-gray-600 mr-2 h-6 w-6" onClick={()=>setIsNew(!isNew)} /></span>
          }
            <label
              htmlFor="new-collection"
              className="text-lg text-app-secondary align-middle sm:align-baseline leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              NEW COLLECTION
            </label>
            <p className="ml-8 sm:mt-1 text-sm text-gray-500">
              Do you want to add it to the new collection?.
            </p>
          </div>
        </div>
        {/* Price */}
        <div className="mb-4">
          <label htmlFor='price' className="inline-block mb-1 text-app-secondary">PRICE</label>
          <input 
            required id="price" type="number" value={price} onChange={(e) => handlePriceChange(e)}
            className="block bg-gray-200/70 h-11 w-full p-2 rounded-md focus:border-app-secondary focus:border-2 outline-none" 
          />
        </div>
        {/* Sale */}
        <div className="mb-4">
          <label htmlFor='sale' className="inline-block mb-1 text-app-secondary">SALE {"%"}</label>
          <div className="flex">
            <input 
              id="sale" type="number" value={sale} onChange={(e) => handleSaleChange(e)} 
              className="inline-block bg-gray-200/70 h-11 w-1/2 p-2 rounded-md focus:border-app-secondary focus:border-2 outline-none"
            />
            <span className="inline-block w-1/2 pl-2 text-xl pt-2 text-right pr-4">{newPrice.toFixed(2)} LE</span>
          </div>
        </div>
        {/* Description */}
        <div className="mb-4">
          <label htmlFor='description' className="inline-block mb-1 text-app-secondary">DESCRIPTION</label>
          <textarea
            name="description" id="description" cols={30} rows={4} value={description} onChange={(e) => setDescription(e.target.value)}
            className="block bg-gray-200/70 w-full p-2 rounded-md border-transparent resize-none border-2 outline-none focus:border-app-secondary" 
          />
        </div>
        {/* Dimentions */}
        <div className="mb-4">
          <label htmlFor='dimensions' className="inline-block mb-1 text-app-secondary">DIMENSIONS</label>
          <textarea 
            name="dimensions" id="dimensions" cols={30} rows={4} value={dimensions} onChange={(e) => setDimensions(e.target.value)}
            className="block bg-gray-200/70 w-full p-2 rounded-md border-transparent resize-none border-2 outline-none focus:border-app-secondary" 
          />
        </div>
        {/* Product Features */}
        <div className="mb-8">
          <label htmlFor='product-options' className="inline-block mb-1 text-app-secondary">PRODUCT FEATURES</label>
          <textarea
            name="product-options" id="product-options" cols={30} rows={4} value={productFeatures} onChange={(e) => setProductFeatures(e.target.value)}
            className="block bg-gray-200/70 w-full p-2 rounded-md border-transparent resize-none border-2 outline-none focus:border-app-secondary" 
          />
        </div>
        {/* Product Options */}
        <div className="mb-8">
          <label htmlFor='product-options' className="inline-block mb-1 text-app-secondary">PRODUCT OPTIONS</label>
          <textarea 
            name="product-options" id="product-options" cols={30} rows={4} value={productOptions} onChange={(e) => setProductOptions(e.target.value)}
            className="block bg-gray-200/70 w-full p-2 rounded-md border-transparent resize-none border-2 outline-none focus:border-app-secondary" 
          />
        </div>
        <button className="block m-auto mb-8 py-2 px-4 bg-app-action text-app-primary rounded-md">ADD PRODUCT</button>
    </form>
  );
}

export default AddProductPage;