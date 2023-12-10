import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom";

it("Should show text of button on contact page", () => { 
    render(<Contact/>)

    const inputPlaceHolder = screen.getByText("Submit");
    // console.log(inputPlaceHolder)

    expect(inputPlaceHolder).toBeInTheDocument();
 })

 it("Should load input name inside contact component", () => {
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");
    

    expect(inputName).toBeInTheDocument();
 });

 it("Should load 2 input boxes from contact component", () => {
    render(<Contact/>);

    const inputBox = screen.getAllByRole("textbox");
    console.log(inputBox);

    expect(inputBox).toHaveLength(2);
 });

 