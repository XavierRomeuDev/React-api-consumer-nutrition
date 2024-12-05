import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { EmptyDatabase } from "./EmptyDatabase";
import { ProductCard } from "./ProductCard";
import { toast } from "react-toastify";

export const TopProducts = () => {
  const [currentId, setCurrentId] = useState("");
  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (currentId !== "") {
      updateProduct(currentId);
    }
    // eslint-disable-next-line
  }, [product]);

  const getProducts = () => {
    db.collection("products")
      .orderBy("rate", "desc")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
      });
  };

  const handleRating = (rating) => {
    setRating(rating);
  };

  const updateProduct = async (id) => {
    await db.collection("products").doc(id).update(product);
    toast(product.product_name + " rated succesfully with: " + rating + " stars", {
      type: "success",
      autoClose: 1000
    });
  };

  if (products.length > 0) {
    return (
      <div className="col-md-16 ">
        {products.slice(0, 5).map((product) => (
          <ProductCard
            handleRating={handleRating}
            setCurrentId={setCurrentId}
            setProduct={setProduct}
            product={product}
            rating={rating}
            key={product.id}
          />
        ))}
      </div>
    )
  } else {
    return <EmptyDatabase />;
  }
}
