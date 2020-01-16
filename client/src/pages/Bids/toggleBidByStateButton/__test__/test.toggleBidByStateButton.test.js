
import React from "react";
import ReactDOM,{ render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ToggleBidByStateButton from "../toggleBidByStateButton";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})


it('it should render toggle button', ()=>{
    const buttonTitle = 'Show All/ True';
    act(()=>{
        render(<ToggleBidByStateButton />, container);
    })
    expect(container.textContent).toBe(buttonTitle);
})

it("toggle function is working ", () => {

    const mockFunction = jest.fn()
    //ama creat p f spion

    act(() => {
        ReactDOM.render(<ToggleBidByStateButton handleShowTrueAll = {mockFunction} />, container);
    });
    //verif data se randeaza
    const button = container.querySelector('button')

    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(mockFunction).toHaveBeenCalled()

} )
