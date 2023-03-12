import React from "react";
// icons
// css
import "./procedure-card.css";

import { procedureData } from "../../utils/data";

const ProcedureCard = () => {
  return (
    <React.Fragment>
      {procedureData.map((card, index) => (
        <div className="procedure-card">
          {card.icon}
          <p>{card.text}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ProcedureCard;
