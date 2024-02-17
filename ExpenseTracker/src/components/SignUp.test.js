import { render, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/store/centralStore";

describe("SignUp component", () => {

    //1
  test("renders Signup text", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    const signupHeader = await screen.getAllByText('SignUp');
    expect(signupHeader[0]).toBeInTheDocument(); 
  });

   //2
  test("renders Login text", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    const loginHeader = await screen.getAllByText('Login');
    expect(loginHeader[0]).toBeInTheDocument(); // Fixed variable name from Login to loginHeader
  });

   //3
  test("renders placeholder text", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    const emailPlaceholder =await screen.getByText('Enter Email');
    expect(emailPlaceholder).toBeInTheDocument(); 
  });

   //4
  test("renders label text", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    const emaillabel =await screen.getByText('Email');
    expect(emaillabel).toBeInTheDocument(); 
  });

  //5
  test("renders label passwordtext", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    const password =await screen.getByText('Password');
    expect(password).toBeInTheDocument(); 
  });

  //6
  test("renders forgot password", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    const password =await screen.getByText('Forgot Password ?');
    expect(password).toBeInTheDocument(); 
  });


    //7
    test("renders forgot password", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <SignUp />
            </BrowserRouter>
          </Provider>
        );
        const loginPrompt =await screen.getByText('Have an account? Login');
        expect(loginPrompt).toBeInTheDocument(); 
      });

      // 8
 
});
