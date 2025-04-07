import React from "react";
import Cards from "./Cards";
import Banks from "./Banks";

function CardAndBank() {
  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
      <div>
        <div className="mb-8">
          <div className="space-y-8">
            <Cards />
          </div>
          <div className="space-y-8 pt-5">
            <Banks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardAndBank;
