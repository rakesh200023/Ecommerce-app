import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Navbar from "../Navbar";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";

it("Navbar Test", () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const res = queryByTitle("brand-test");
  console.log("tes tre", res.children);
  expect(res).toBeTruthy();
});

test("renders navbar link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const Home = screen.getByText(/Home/i);
  console.log("link ellellel", Home);
  expect(Home).toBeInTheDocument();
});

test("renders navbar link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const MostViewed = screen.getByText(/Most Viewed/i);
  //console.log("link ellellel", Most Viewed);
  expect(MostViewed).toBeInTheDocument();
});

test("renders navbar link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const Signin = screen.getByText(/Sign in/i);
  //console.log("link ellellel", Sign in);
  expect(Signin).toBeInTheDocument();
});

test("renders navbar link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const SignUp = screen.getByText(/Sign Up/i);
  //console.log("link ellellel", Sign Up);
  expect(SignUp).toBeInTheDocument();
});
