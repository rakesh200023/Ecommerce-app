import { render, screen } from "@testing-library/react";
import Signin from "../Signin";
import store from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
it("Add product Test", () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    </Provider>
  );
  const res = queryByTitle("login");
  //console.log("tes tre", res);
  expect(res).toBeTruthy();
});

test("renders navbar link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    </Provider>
  );
  const Editp = screen.getByText(/Login/i);
  // console.log("link ellellel", Home);
  expect(Editp).toBeInTheDocument();
});
