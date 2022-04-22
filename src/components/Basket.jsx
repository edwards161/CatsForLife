import React, { useState } from "react";
import "../index.css";

export default function BasketModal({list,removeFromList}) {
  const [basketModal, setBasketModal] = useState(false);

  const toggleBasketModal = () => {
    setBasketModal(!basketModal);
  };
	const onClick = (e) => {
		removeFromList(e);
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
            <p className="total">Total cost:</p>
            {list.map((cat, index) => (
              <div key={index}>
                <h2>{cat.name}</h2>
                <h2>£{cat.price}</h2>
                <img src={cat.image} alt="cat mug shot" />
                <div>
                  <button onClick={() => onClick(index)}>Remove from Basket</button>
                </div>
              </div>
            ))}
            <p className="close-basket-modal" onClick={toggleBasketModal}>
              CLOSE
            </p>
          </div>
        </div>
      )}
    </>
  );
}
