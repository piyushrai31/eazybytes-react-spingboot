import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import DropDown from "./DropDown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({ products }) {
  const [searchText, setSearchText] = useState("");
  const [selectedSort, setSelectedSort] = useState("Popularity");
  const filterAndSortProducts= useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    //optimized way- shallow copy slice() does
    return filteredProducts.slice().sort((a, b) => {
      switch (selectedSort) {
        case "Price Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
        case "Price High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
        case "Popularity":
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });

    // switch (selectedSort) {
    //   case "Price Low to High":
    //     filterAndSortProducts= filterAndSortProducts.sort(
    //       (a, b) =>
    //         parseInt(a.price) - parseInt(b.price)
    //     );
    //     break;
    //   case "Price High to Low":
    //     filterAndSortProducts= filterAndSortProducts.sort(
    //       (a, b) =>
    //         parseFloat(b.price) - parseFloat(a.price)
    //     );
    //     break;
    //   default:
    //     filterAndSortProducts= filterAndSortProducts.sort(
    //       (a, b) =>
    //         parseInt(b.popularity) - parseInt(a.popularity)
    //     );
    // }

    // return filterAndSortProducts;

  }, [products, searchText, selectedSort]);

  function handleSearchChange(inputSearch) {
    setSearchText(inputSearch);
  }

  function handleSortChange(value) {
    setSelectedSort(value);
  }


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
          selectedValue={selectedSort}
          handleSort={(value) => handleSortChange(value)}
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