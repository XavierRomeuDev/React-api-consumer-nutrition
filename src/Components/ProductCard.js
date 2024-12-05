import React from "react";
import { Rating } from "react-simple-star-rating";

export const ProductCard = ({
  handleRating,
  setCurrentId,
  setProduct,
  product,
  rating,
}) => {
  return (
    <div className="card mb-1 separator">
      <div className="card-body">
        <div>
          <img
            className="product-image"
            src={product.image}
            alt={product.product_name}
          ></img>
        </div>
        <div className="product-data">
          <p>
            {" "}
            <strong>Name:</strong> {product.product_name}{" "}
          </p>
          <p>
                {" "}
                <strong>Keywords:</strong>{" "}
                {product.keywords[0] +
                  ", " +
                  product.keywords[1] +
                  ", " +
                  product.keywords[2] +
                  ", " +
                  product.keywords[3] +
                  ", " +
                  product.keywords[4]}
              </p>
          <p>
            {" "}
            <strong>Global rating:</strong> {product.rate + ""}{" "}
          </p>
          <p>
            {" "}
            <strong>Number of rates:</strong> {product.num_rates + ""}{" "}
          </p>

          <Rating
            onClick={(rating) => {
              handleRating(rating);
              setCurrentId(product.id);
              setProduct({
                barcode: product.barcode,
                product_name: product.product_name,
                keywords: product.keywords,
                image: product.image,
                total_rate: product.total_rate + rating,
                rate: (product.rate + rating) / product.num_rates,
                num_rates: product.num_rates + 1,
              });
            }}
            ratingValue={rating}
            size={20}
            label
            transition
            fillColor="orange"
            emptyColor="gray"
            className="stars"
          />
        </div>
      </div>
    </div>
  )
}
