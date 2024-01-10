import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe("Pruebas desde <GifExpertApp />", () => {
    
    test("validar si el texto GifExpertApp existe", () => {
        render(<GifExpertApp/>)
        // screen.debug();
        expect(screen.getByText("GifExpertApp")).toBeTruthy();
    });

    test("Válida que la nueva catégoria no sea tenida en cuenta", () => {
        const inputValue = "One Punch"

        render(<GifExpertApp/>)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input,{target: {value: inputValue}})
        fireEvent.submit(form);

        expect(input.value).toBe("");
        
        // screen.debug()

    });

    test("debe de agregarse una nueva catégoria", () => {
        render(<GifExpertApp/>)
        
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target:{value: "One Two"}})
        fireEvent.submit(form)

        expect(screen.getByText("One Two"));

        // screen.debug();
    });

    test("deben haber dos h3", () => {
        render(<GifExpertApp/>)
        
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target:{value: "One Two"}})
        fireEvent.submit(form)

        expect(screen.getAllByRole("heading",{level:3}).innerHTML)

        screen.debug();

    })
});