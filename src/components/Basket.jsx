import React, { useState } from "react";
import "../index.css";

export default function BasketModal() {
  const [basketModal, setBasketModal] = useState(false);

  const toggleBasketModal = () => {
    setBasketModal(!basketModal);
  };

  return (
    <>
      <a onClick={toggleBasketModal} className="btn-modal">
        Basket
      </a>

      {basketModal && (
        <div className="basket-modal">
          <div onClick={toggleBasketModal} className="overlay"></div>
          <div className="basket-modal-content">
            <h2>Cats in basket</h2>
            <p className="total">
                Total cost:
            </p>
            <a className="close-basket-modal" onClick={toggleBasketModal}>
              CLOSE
            </a>
          </div>
        </div>
      )}
    </>
  );
}