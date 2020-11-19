import React, { useEffect, useRef, useState } from "react";
import ConfirmProduit from "./ConfirmProduit";
import { Link } from "react-router-dom";

function ConfirmPage({ shoppingCart, status }) {
  const [check, setCheck] = useState(false);
  const [price, setPrice] = useState();

  useEffect(() => {
    let pd = shoppingCart.reduce((acc, cur) => {
      console.log(acc + cur.price);
      return acc + cur.price;
    }, 0);
    setPrice(pd);
  }, [status]);

  return (
    <div className="confirm-container">
      <div className="confirm-list-product-info">
        <div className="confirm-list-product">
          {shoppingCart.map((item) => {
            return (
              <ConfirmProduit
                key={item.id}
                productImage={item.img_url}
                name={item.title}
                price={item.price}
              />
            );
          })}
          <div className="confirm-info-price">
            <div className="confirm-shipping-price">
              <p>shipping</p>
              <p>a tobacco packet to the delivery man</p>
            </div>
            <div className="confirm-total-price">
              <p>Total</p>
              <p>$ {price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="confirm-container-info-shipping">
        <p>please pay by cash when you are delivry </p>
        <div>
          <form>
            <div>
              <input
                type="radio"
                name="place"
                id="myPlace"
                defaultChecked
                onChange={() => {
                  setCheck(false);
                  console.log(check);
                }}
              />
              <label htmlFor="myPlace">shipping on my place</label>
            </div>
            <div>
              <input
                type="radio"
                name="place"
                id="other"
                onChange={() => {
                  setCheck(true);
                  console.log(check);
                }}
              />
              <label htmlFor="other">select an other place</label>
            </div>
            {check && (
              <div>
                <div>
                  <input type="text" defaultValue="" placeholder="addres" />
                </div>
                <div>
                  <input type="text" defaultValue="" placeholder="appart" />
                </div>
              </div>
            )}
            <div>
              <button type="submit">confirm my adress</button>
            </div>
          </form>
          <Link to="/">
            <div>Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPage;
