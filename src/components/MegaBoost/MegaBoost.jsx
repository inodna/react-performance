import { memo } from "react";

export const MegaBoost = ({ handleClick }) => {
  console.log("Render MegaBoost");

  return (
    <button className="mega-boost-button" onClick={handleClick}>
      MEGA BOOST!
    </button>
  );
};

export const MemoMegaBoost = memo(MegaBoost);
