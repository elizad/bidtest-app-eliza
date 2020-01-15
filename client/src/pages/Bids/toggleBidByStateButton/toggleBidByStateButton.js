import React from "react";
import "./toggleBidByStateButton.css";

const label = "Show All/Accepted"
function ToggleBidByStateButton(props) {
    return (
    <button name="showTrueAll" data-testid="button" className="button-style btn" onClick={props.handleShowTrueAll}>
      {label}
    </button>
  )

}

export default ToggleBidByStateButton
