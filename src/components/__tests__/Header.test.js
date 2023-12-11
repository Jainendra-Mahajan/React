import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should load header component with Login Button" , () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "login"});
    // const loginButton = screen.getByText("login")
    
    expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout on click" , () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "login"});
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button" , {name : "logout"})
    
    expect(logoutButton).toBeInTheDocument();
});