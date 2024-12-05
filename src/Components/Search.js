import React, { useEffect, useState } from "react";
import { SearchResult } from "./SearchResult";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

export const Search = () => {
  const [barcode, setBarcode] = useState("");
  const [data, setData] = useState([]);
  const [exists, setExists] = useState();
  const [product, setProduct] = useState();
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (exists === true) {
      addProductFirebase(product);
    }
    // eslint-disable-next-line
  }, [exists]);

  useEffect(() => {
    if (exists === false) {
      toast(product.product_name + " is already listed", {
        type: "error",
        autoClose: 1000
      });    
    }
    // eslint-disable-next-line
  }, [product]);

  const addProduct = (productObject) => {
    const queryBarcode = query(
      collection(db, "products"),
      where("barcode", "==", productObject.barcode)
    );
    onSnapshot(queryBarcode, (querySnapshot) => {
      if (querySnapshot.empty) {
        setExists(true);
        setProduct(productObject);
      } else {
        setProduct(productObject);
        setExists(false);
      }
    });
  };

  const addProductFirebase = async (product) => {
    await db.collection("products").doc().set(product);
    toast(product.product_name + " added", {
      type: "success",
      autoClose: 1000
    });
  };

  const apiRequest = (e) => {
    e.preventDefault();

    let datos = e.target;
    let search = datos.barcode.value;
    setBarcode(search);

    setTimeout(async () => {
      const request = await fetch(
        "https://world.openfoodfacts.org/api/v0/product/" + search + ".json"
      );
      const { product } = await request.json();

      if (product) {
        setData(product);
        setErrors("");
      } else {
        setErrors("error");
      }
    }, 1000);
  };

  if (errors !== "") {
    return (
      <div>
        <p>Enter a barcode to search the product</p>
        <form className="card card-body" onSubmit={apiRequest}>
          <div className="form-group input-group">
            <input
              className="form-control"
              type="text"
              name="barcode"
              placeholder="8436048475739"
            />
            &nbsp;
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Search product"
            />
          </div>
        </form>

        <br></br>
        <h3 className="no-result">Enter a barcode, or a valid one</h3>
      </div>
    );
  } else if (data.product_name) {
    return (
      <div>
        <p>Enter a barcode to search the product</p>
        <form className="card card-body" onSubmit={apiRequest}>
          <div className="form-group input-group">
            <input
              className="form-control"
              type="text"
              name="barcode"
              placeholder="8436048475739"
            />
            &nbsp;
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Search product"
            />
          </div>
        </form>

        <br></br>
        <SearchResult data={data} addProduct={addProduct}/>
      </div>
    );
  } else if (barcode === "") {
    return (
      <div>
        <p>Enter a barcode to search the product</p>
        <form className="card card-body" onSubmit={apiRequest}>
          <div className="form-group input-group">
            <input
              className="form-control"
              type="text"
              name="barcode"
              placeholder="8436048475739"
            />
            &nbsp;
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Search product"
            />
          </div>
        </form>
      </div>
    );
  }
};
