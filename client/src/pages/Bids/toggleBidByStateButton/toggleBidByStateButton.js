import React from "react";
import "./toggleBidByStateButton.css";

function ToggleBidByStateButton(props) {
    return (
    <button name="showTrueAll" data-testid="button" className="button-style btn" onClick={props.handleShowTrueAll}>
      Show All/Accepted
    </button>
  )

}

export default ToggleBidByStateButton
