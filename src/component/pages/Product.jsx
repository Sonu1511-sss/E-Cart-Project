import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import default styles for react-tabs
import { FaStar } from "react-icons/fa"; // For star icons
import Title from "../Title";
import { toast } from "react-toastify"; // Ensure this import is added

function Product() {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Sample reviews (in case the product has no reviews)
  const sampleReviews = [
    { user: "John Doe", comment: "Great quality, fits well!", rating: 5 },
    { user: "Jane Smith", comment: "Very comfortable and soft material.", rating: 4 },
    { user: "Alex Johnson", comment: "Good value for the price.", rating: 4 },
    { user: "Emily Davis", comment: "A bit too loose, but still nice.", rating: 3 },
  ];

  const fetchProductData = () => {
    const product = products.find((item) => item.id === Number(productId));
    if (product) {
      setProductData(product);
      const related = products.filter(
        (item) => item.category === product.category && item.id !== product.id
      );
      setRelatedProducts(related);
    } else {
      console.error("Product not found for ID:", productId);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(productData.id, selectedSize); // Pass productData.id instead of productData
      toast.success(`${productData.productName} added to cart with size ${selectedSize}`);
    } else {
      toast.error("Please select a size");
    }
  };

  if (!productData) {
    return <div className="text-center text-gray-600">Product not found</div>;
  }

  // Use product reviews if available, otherwise use sample reviews
  const reviewsToDisplay =
    productData.reviews?.length > 0 ? productData.reviews : sampleReviews;

  // Calculate star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`h-5 w-5 ${i <= rating ? "text-yellow-500" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        {/* Image Carousel */}
        <div className="relative w-full md:w-1/2">
          <img
            src={productData.images[currentImage]}
            alt={productData.productName}
            className="w-full rounded-lg shadow-md"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-2">
            {productData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-12 w-12 rounded-lg overflow-hidden ${
                  currentImage === index ? "border-2 border-black" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">
            {productData.productName}
          </h1>

          {/* Star Ratings Above Price */}
          <div className="mb-2 flex items-center ">
            {renderStars(productData.rating || 4)}
          </div>

          <p className="text-xl font-bold text-gray-700 mb-2">
            ${productData.price}
          </p>
          <p className="text-gray-600 mb-4">{productData.description}</p>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="font-medium mb-2">Select Size:</p>
            <div className="flex gap-2">
              {productData.size?.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300 text-gray-700"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              )) || <p className="text-gray-500">No sizes available.</p>}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-[12rem] bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
          <div className="mt-6 text-gray-600">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Tabs for Description and Reviews */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Reviews ({reviewsToDisplay.length})</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-lg font-medium mb-2">Description</h2>
          <p className="text-gray-600">{productData.description}</p>
        </TabPanel>

        <TabPanel>
          <h2 className="text-lg font-medium mb-2">Reviews</h2>
          {reviewsToDisplay.length > 0 ? (
            reviewsToDisplay.map((review, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <p>
                  <strong>{review.user}</strong>: {review.comment}
                </p>
                <p className="flex">Rating: {renderStars(review.rating)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews available.</p>
          )}
        </TabPanel>
      </Tabs>

      {/* Related Products */}
      <div className="mt-12">
        <Title className="text-center" text1={"RELATED "} text2={"PRODUCTS"} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="text-center">
                <img
                  src={relatedProduct.images[0]}
                  alt={relatedProduct.productName}
                  className="w-full rounded-lg mb-2"
                />
                <h3 className="font-semibold">{relatedProduct.productName}</h3>
                <p className="text-lg font-bold">${relatedProduct.price}</p>
              </div>
            ))
          ) : (
            <p>No related products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
