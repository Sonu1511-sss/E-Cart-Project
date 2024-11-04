import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from "../Title";
import ProductItems from "../ProductItems";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products); // Initialize with all products
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant"); // Track sorting option

  useEffect(() => {
    setFilterProducts(products); // Update filtered products when the product list changes
  }, [products]);

  // Handle Category Change
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter Products by Category and Sort
  useEffect(() => {
    let filtered = products;

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Sort Products based on selected option
    if (sortOption === "low-high") {
      filtered = filtered.sort((a, b) => a.price - b.price); // Low to High
    } else if (sortOption === "high-low") {
      filtered = filtered.sort((a, b) => b.price - a.price); // High to Low
    }

    // Apply search filter
    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(filtered);
  }, [selectedCategories, sortOption, products, search, showSearch]);

  // Handle Sorting Change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-2 sm:px-8">
      {/* Filter option */}
      <div className="min-w-60">
        <p
          className="my-2 text-lg sm:text-xl flex items-center cursor-pointer gap-2 font-bold text-gray-700"
          onClick={() => setshowFilter(!showFilter)}
        >
          FILTERS
          <RiArrowDropDownLine className={"text-[2rem] sm:hidden cursor-pointer"} />
        </p>

        {/* Categories */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Men"
                onChange={() => handleCategoryChange("Men")}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Women"
                onChange={() => handleCategoryChange("Women")}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Kids"
                onChange={() => handleCategoryChange("Kids")}
              />
              Kids
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* Product Sorting */}
          <select
            className="border border-gray-300 text-xs sm:text-sm px-2"
            onChange={handleSortChange}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: High to Low </option>
            <option value="high-low">Sort by: Low to High</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filterProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item.id}
              images={item.images} // Pass images array
              productName={item.productName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
