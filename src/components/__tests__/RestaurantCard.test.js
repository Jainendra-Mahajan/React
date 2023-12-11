import { render, screen } from "@testing-library/react"
import ResCard from "../ResCard";
import "@testing-library/jest-dom"
import MOCK_DATA from "../../Mocks/resCardMock.json"

it("Should render restaurant card status with data" , () => {
    render(<ResCard resData = {MOCK_DATA}/>);

    const restaurantName = screen.getByText("Domino's Pizza");
    expect(restaurantName).toBeInTheDocument();
});