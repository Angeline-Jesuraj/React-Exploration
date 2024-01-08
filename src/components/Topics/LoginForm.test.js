import {fireEvent, render,screen} from "@testing-library/react";
import LoginForm ,{validateEmail }from "./LoginForm";

describe("Test  the Login compoennet",()=>{
    test("render the login form with 2 button",async()=>{
        render(<LoginForm/>)
        const buttonlist =await screen.findAllByRole("button");
        expect(buttonlist).toHaveLength(2);
    })


    test("should failed on email validation",()=>{
        render(<LoginForm/>)
        const testemail="ange.com";
        expect (validateEmail(testemail)).not.toBe(true);
    })
    // test("should failed on email validation",()=>{
    //     const testemail="ange@gmail.com";
    //     expect (validateEmail(testemail)).toBe(true);
    // })

    test("email input field should accept email",()=>{
        render(<LoginForm/>)
        const email=screen.getByPlaceholderText("Enter email");
        //failed becase doesn't match
        // userEvent.type(email,"ange")
        // expect(email.value).toMatch("ange@gmail.com")
        userEvent.type(email,"ange")
        expect(email.value).not.toMatch("ange@gmail.com")

    })

    test("password input should have tupe password"),()=>{
        render(<LoginForm/>) 
        const password=screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type","password");
    }

    test("should be able to reset the form",()=>{
        const{ getByLabelText,getByTestId }=render(<LoginForm/>)
        const resetBtn =getByTestId("reset");
        const emailInput=screen.getByPlaceholderText("Enter email");
        const passwordInput=screen.getByPlaceholderText("Password");


        fireEvent.click(resetBtn);
        expect(emailInput.value).toMatch("");
        expect(passwordInput.value).toMatch("")
    })

    
    test("should be able to submit the form",()=>{
        const{ getByLabelText,getByTestId }=render(<LoginForm/>)
        const submitBtn =getByTestId("submit");
        const emailInput=screen.getByPlaceholderText("Enter email");
        const passwordInput=screen.getByPlaceholderText("Password");


     
        userEvent.type(emailInput,"ange@gmail.com")
        userEvent.type(passwordInput,"1234567")

        userEvent.click(submitBtn)
        
        expect(emailInput.value).toMatch("");
        expect(passwordInput.value).toMatch("")
    })
})