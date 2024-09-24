import { FaImage } from "react-icons/fa";
import {ImageData} from "../../app/hooks/use-add-product-form";
import { IoMdClose } from "react-icons/io";

interface ImagesInputProps {
  images: ImageData[],
  uploadImage: Function,
  deleteImage: Function,
  haveImage: boolean,
}

const ImagesInput:React.FC<ImagesInputProps> = ({images, uploadImage, deleteImage, haveImage}) => {
    return ( 
        <div className="mb-4">
            {
                images.length > 0
                ? <div>
                    <span
                        onClick={() => deleteImage(0)}
                        className="absolute p-1 m-1 text-xl bg-white/70 rounded-md hover:cursor-pointer"
                    >
                        <IoMdClose />
                    </span>
                    <img 
                        src={images[0].url}
                        className='h-52 w-full object-cover'
                    />
                    </div>
                : <label
                    htmlFor="upload-file"
                    className="grid group h-52 border-2 bg-gray-200/70 border-app-secondary rounded-md cursor-pointer 
                    hover:bg-gray-200/30 transition-all duration-300"
                    >
                    <span className='inline-block m-auto text-app-secondary'>
                        <FaImage className="inline-block mr-2 text-2xl"/>
                        <span>Upload Image</span>
                    </span>
                </label>
            }
            <input
                type="file" placeholder="Choose image" accept="image/png,image/jpeg" id='upload-file'
                onChange={(e) => uploadImage(e)}
                className="hidden"
            />
          <div className="flex flex-wrap mt-4">
            {
              images.map((image, index) => {
                return index > 0 && (
                  <div 
                    key={index}
                    className="relative w-20 h-20 mr-2"
                  >
                    <span
                      onClick={() => deleteImage(index)}
                      className="absolute p-1 m-1 text-xl bg-white/70 rounded-md hover:cursor-pointer"
                    >
                      <IoMdClose />
                    </span>
                    <img 
                      src={image.url} alt=""
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                )
              })
            }
          </div>
            {
              images.length > 0 &&
              <label
                htmlFor="upload-file"
                className="inline-block border-2 mt-4 p-2 bg-gray-200/70 border-app-secondary rounded-md cursor-pointer 
                hover:bg-gray-200/30 transition-all duration-300"
              >
                <span className='inline-block m-auto text-app-secondary'>
                  <FaImage className="inline-block mr-2 text-2xl"/>
                  <span>Upload Image</span>
                </span>
              </label>
            }
            {
              !haveImage &&
              <span className="inline-block text-red-700"> You must upload at least one image</span>
            }
        </div>
    );
}
 
export default ImagesInput;