import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">
            <small>$</small>
            <strong>70</strong>
          </p>
          <div className="product__rating">⭐⭐</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCJLHK-b_hGXMNREYfJ4QmxvBUribTpvzsA&usqp=CAU"
            alt="laptop_bag_image"
          />
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
