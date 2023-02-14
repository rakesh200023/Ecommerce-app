import { render, screen } from "@testing-library/react";
import Addproduct from "../Addproduct";
import store from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
it("Add product Test", () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Addproduct />
      </BrowserRouter>
    </Provider>
  );
  const res = queryByTitle("Addprod");
  //console.log("tes tre", res);
  expect(res).toBeTruthy();
});

test("renders navbar link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Addproduct />
      </BrowserRouter>
    </Provider>
  );
  const Addp = screen.getByText(/Add Product/i);
  // console.log("link ellellel", Home);
  expect(Addp).toBeInTheDocument();
});
