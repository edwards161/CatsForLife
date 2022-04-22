import React, { useState } from "react";
import "../index.css";

export default function BasketModal() {
  const [basketModal, setBasketModal] = useState(false);

  const toggleBasketModal = () => {
    setBasketModal(!basketModal);
  };

  return (
    <>
      <p onClick={toggleBasketModal} className="btn-modal">
        Basket
      </p>

      {basketModal && (
        <div className="basket-modal">
          <div onClick={toggleBasketModal} className="overlay"></div>
          <div className="basket-modal-content">
            <h2>Cats in basket</h2>
            <p className="total">
                Total cost:
            </p>
            <p className="close-basket-modal" onClick={toggleBasketModal}>
              CLOSE
            </p>
          </div>
        </div>
      )}
    </>
  );
}