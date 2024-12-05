import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

export const SearchResult = ({ data, addProduct }) => {
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState({
    barcode: data._id,
    product_name: data.product_name,
    keywords: data._keywords,
    image: data.image_url,
    total_rate: 0,
    rate: rating,
    num_rates: 1,
  });

  useEffect(() => {
    if (!data.image_url) {
      setProduct({
        barcode: data._id,
        product_name: data.product_name,
        keywords: data._keywords,
        image:
          "https://imgs.search.brave.com/Ia4xwMxHraroG2AhGFyeaM5KLPQjGCu1924x_5U5Rq8/rs:fit:640:400:1/g:ce/aHR0cHM6Ly9hcnRz/bWlkbm9ydGhjb2Fz/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTQvMDUvbm8t/aW1hZ2UtYXZhaWxh/YmxlLWljb24tNi5w/bmc",
        total_rate: 0,
        rate: rating,
        num_rates: 1,
      });
    } else {
      setProduct({
        barcode: data._id,
        product_name: data.product_name,
        keywords: data._keywords,
        image: data.image_url,
        total_rate: 0,
        rate: rating,
        num_rates: 1,
      });
    }
    // eslint-disable-next-line
  }, [data._keywords]);

  //handle rating and save on firebase
  const handleRating = (rating) => {
    setRating(rating);
    //update product rating by user
    setProduct({
      ...product,
      total_rate: product.total_rate + rating,
      rate: rating,
    });
  };

  const publishProduct = (e) => {
    e.preventDefault();
    addProduct(product);
  };

  if (data.image_url) {
    return (
      <div className="col-md-16">
        <div className="card mb-1">
          <div className="card-body">
            <div>
              <img
                className="product-image"
                src={data.image_url}
                alt={data.product_name}
              ></img>
            </div>
            <div className="product-data">
              <p>
                {" "}
                <strong>Barcode:</strong> {data._id}
              </p>
              <p>
                {" "}
                <strong>Name:</strong> {data.product_name}{" "}
              </p>
              <p>
                {" "}
                <strong>Keywords:</strong>{" "}
                {data._keywords[0] +
                  ", " +
                  data._keywords[1] +
                  ", " +
                  data._keywords[2] +
                  ", " +
                  data._keywords[3] +
                  ", " +
                  data._keywords[4]}
              </p>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                fillColor="orange"
                emptyColor="gray"
                className="stars"
              />
              <form className="publish" onSubmit={publishProduct}>
                <input
                  className="btn btn-primary btn-block"
                  type="submit"
                  value="Publish product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-md-16">
        <div className="card mb-1">
          <div className="card-body">
            <div>
              <p>
                {" "}
                <strong>Sorry this product have no image</strong>{" "}
              </p>
            </div>
            <div className="product-data-no-image">
              <p>
                {" "}
                <strong>Barcode:</strong> {data._id}
              </p>
              <p>
                {" "}
                <strong>Name:</strong> {data.product_name}{" "}
              </p>
              <p>
                {" "}
                <strong>Keywords:</strong>{" "}
                {data._keywords[0] +
                  ", " +
                  data._keywords[1] +
                  ", " +
                  data._keywords[2] +
                  ", " +
                  data._keywords[3] +
                  ", " +
                  data._keywords[4]}
              </p>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                fillColor="orange"
                emptyColor="gray"
                className="stars"
              />
              <form className="publish" onSubmit={publishProduct}>
                <input
                  className="btn btn-primary btn-block"
                  type="submit"
                  value="Publish product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
