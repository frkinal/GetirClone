import { useState, useEffect } from "react";

import cardsData from "../api/Cards.json";

export default function Cards() {
  const [cards, seCards] = useState([]);

  useEffect(() => {
    seCards(cardsData);
  }, []);

  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-3 gap-x-4">
          {cards.length &&
            cards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-10 rounded-lg shadow-sm flex flex-col items-center text-center"
              >
                <img src={card.image} className="w-[150px] h-[150px] mb-6" />
                <h6 className="font-semibold text-lg text-primary-brand-color">
                  {card.title}
                </h6>
                <p className="mt-2 text-sm text-gray-700">{card.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
