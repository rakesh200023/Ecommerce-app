import { render, screen } from "@testing-library/react";
import Signup from "../Signup";
import store from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
it("Signup Test", () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>
  );
  const res = queryByTitle("signup");
  //console.log("tes tre", res);
  expect(res).toBeTruthy();
});

test("renders navbar link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>
  );
  const Editp = screen.getByText(/Register/i);
  // console.log("link ellellel", Home);
  expect(Editp).toBeInTheDocument();
});
