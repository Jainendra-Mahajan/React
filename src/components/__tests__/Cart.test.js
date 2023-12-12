import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import MOCK_DATA from "../../Mocks/MockResMenu.json"
import Cart from "../Cart"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});
it("Should load Restaurant Menu Component" , async() => {
    await act (async () => {
        render(
        <Provider store={appStore}>
            <BrowserRouter>
                <RestaurantMenu/>
                <Header/>
                <Cart/>
            </BrowserRouter>
        </Provider>
        );
    });

    const accordianHeader = screen.getByText("Jain Friendly (3)");
    fireEvent.click(accordianHeader);

    const addButton = screen.getAllByTestId("fooditems");
    expect(addButton.length).toBe(3);

    const addbtn = screen.getAllByRole("button" , {name: "Add New +"})
    expect(screen.getByText("Cart (0 Items)")).toBeInTheDocument();

    fireEvent.click(addbtn[0]);

    const headerCart = screen.getByText("Cart (1 Items)")
    expect(headerCart).toBeInTheDocument();

    fireEvent.click(addbtn[1]);

    const headerCart2 = screen.getByText("Cart (2 Items)")
    expect(headerCart2).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(5);

    const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"});
    fireEvent.click(clearCartBtn);

    expect(screen.getAllByTestId("fooditems").length).toBe(3);

})