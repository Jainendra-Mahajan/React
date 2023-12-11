import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../../Mocks/MockResListData.json"
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should load restaurant list with pizza once search button is clicked" , async() => {
    await act(async() =>  render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));


    const searchButton = screen.getByRole("button" , {name : "search"});
    const searchText = screen.getByTestId("searchText");

    fireEvent.change(searchText , {target: {value : "Pizza"}});
    fireEvent.click(searchButton);

    const aftersearchClickData = screen.getAllByTestId("rescard")
    expect(aftersearchClickData.length).toBe(3)
    
});

it("should load all restaurant when Top rated button is clicked" , async() => {
    await act(async() => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ));

    const topRatedButton = screen.getByTestId("topratedbutton");

    fireEvent.click(topRatedButton);
    const afterButtonClicked = screen.getAllByTestId("rescard");

    expect(afterButtonClicked.length).toBe(5)
});