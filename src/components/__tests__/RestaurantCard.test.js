import RestaurantCard from "../RestaurantCard"
import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../mock_data/resCardMock.json"
import "@testing-library/jest-dom"

it("should render restaurant component with props data", ()=> {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Alibaba")
    expect(name).toBeInTheDocument();
})