import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../../models/product";
import { ScrollArea, ScrollBar } from "../home/ScrollArea";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Footer from "../home/Footer";
import AdminContext from "../../app/context/admin-context";
import { deleteProduct } from "../../data/firestore";

const ProductDtails = () => {
    const product: Product = useLocation().state;
    const [currentIndex, useCurrentIndex] = useState(0);
    const adminContext = useContext(AdminContext);
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <img 
                    src={product.imagesUrl[currentIndex]} alt="" 
                    className="w-full h-96 object-center object-cover"
                />
            </div>
            <ScrollArea className="my-2 whitespace-nowrap">
                <div className="flex mt-4 px-2">
                {
                    product.imagesUrl.map((url, index) => {
                        return (
                            <div 
                            key={index} onClick={() => useCurrentIndex(index)}
                            className="relative w-36 h-36 mr-2 p-2 bg-gray-200/80 rounded-md"
                            >
                                <img 
                                    src={url} alt={product.name}
                                    className="w-32 h-32 object-cover"
                                    />
                            </div>
                        )
                    })
                }
                </div>
                <ScrollBar className="hidden" orientation="horizontal" />
            </ScrollArea>
            <div className="px-4 mt-4">
                <div className="mb-1 text-2xl text-app-secondary font-bold uppercase">
                    {product.name}
                </div>
                <p className="mt-1 text-gray-800 text-base">
                    {product.description}
                </p>
                <div className="mt-6">
                    <span className="text-xl text-app-secondary font-bold">DIMENSIONS</span>
                    <div className="text-gray-800 text-base">{product.dimensions}</div>
                </div>
                <div className="mt-6">
                    <span className="text-xl text-app-secondary font-bold">PRODUCT OPTIONS</span>
                    <div className="text-gray-800 text-base">{product.productOptions}</div>
                </div>
                <div className="mt-6">
                    <span className="text-xl text-app-secondary font-bold">PRODUCT FEATURES</span>
                    <div className="text-gray-800 text-base">{product.productOptions}</div>
                </div>
                {
                    adminContext.isAdmin
                    ? <div className="flex my-4">
                        <button 
                            className="p-2 m-2 flex-grow bg-gray-100 text-red-500 rounded-md"
                            onClick={async () => {
                                if (await deleteProduct(product.id)){
                                    navigate('/products');
                                }
                            }}
                        >
                            <FaRegTrashAlt className="inline-block mr-2"/>
                            <span>Delete</span>
                        </button>
                        <button className="p-2 m-2 flex-grow bg-gray-100 text-blue-500 rounded-md">
                            <LuPencil className="inline-block mr-2"/> 
                            <span>Edit</span> 
                        </button>
                    </div>
                    :
                    <div className="flex w-full justify-center">
                        <a href="https://wa.me/+201020447455">
                            <button className="bg-app-action text-white w-full md:w-96 my-6 py-3 text-xl">
                                <FaWhatsapp className="inline-block w-8 h-8 mr-2" />
                                <span className="inline-block">CONTACT US</span>
                            </button> 
                        </a> 
                    </div> 
                }
            </div>
            <Footer />
        </div>
    );
}

export default ProductDtails;