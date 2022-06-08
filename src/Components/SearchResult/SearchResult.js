import React from "react";
import SearchCards from "./SearchCards";
import SearchItems from "./SearchItems";
import "./SearchResult.css";

const SearchResult = ({ products }) => {
  return (
    <div className="searchresultcontainer">
      {products.map((item) => {
        return (
          <SearchCards
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            oldprice={item.oldprice}
          />
        );
      })}
      {/* {SearchItems.map((item) => {
        return (
          <SearchCards
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            oldprice={item.oldprice}
          />
        );
      })}
      ; */}
    </div>
  );
};

export default SearchResult;
