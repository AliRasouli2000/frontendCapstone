import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LoginSignUp } from '../LoginSignUp';
import { describe, test, expect, vi } from 'vitest';
import ProgressContext from '../../../contexts/ProgressContext';


const MockLoginSignUp = () => {
    const setUserData = vi.fn();

    return (
        <BrowserRouter>
                <ProgressContext.Provider value={{ userData: {}, setUserData }}>
                    <LoginSignUp />
                </ProgressContext.Provider>
            </BrowserRouter>
    )
}

describe("Login SignUp", () => {
    test("should stay in Sign Up mode when validation fails", () => {
        
        render(<MockLoginSignUp />)

        const usernameInput = screen.getByPlaceholderText("Username");
        const emailInput = screen.getByPlaceholderText("Email Id");
        const passwordInput = screen.getByPlaceholderText("Password");
        const signUpButtons = screen.getAllByText("Sign Up");
        const signUpButton = signUpButtons.find(btn => btn.closest('.submit-container'));
        
        expect(signUpButton).toBeDefined();

        fireEvent.change(usernameInput, { target: { value: "dadada" } });
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password12345" } });
        
        fireEvent.click(signUpButton);
        
        // Check that username field is still visible (stays in Sign Up mode)
        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput).toHaveValue("dadada");
        
        // Check that header still shows "Sign Up" (There has to be 2 "Sign Up" texts one in header and one in button)
        const signUpTexts = screen.getAllByText("Sign Up");
        expect(signUpTexts.length).toBeGreaterThan(1);
    });
});