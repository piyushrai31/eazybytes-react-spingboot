import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import DropDown from "./DropDown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({ products }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = function (inputSearch) {
    setSearchText(inputSearch);
  }

  let filterAndSortProducts = Array.isArray(products) ? (products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()) ||
    product.name.toLowerCase().includes(searchText.toLowerCase())
  ))
    : [];


  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search Products..."
          handleSearch={(event) => handleSearchChange(event.target.value)}
          value={searchText}
        />
        <DropDown
          label="Sort By"
          options={sortList}
          selectedValue="Popularity"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {filterAndSortProducts.length > 0 ? (
          filterAndSortProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}