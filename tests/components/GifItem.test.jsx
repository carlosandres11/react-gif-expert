import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe("Pruebas en componente <GifItem />", () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test("Debe hacer match con el snatshot", () => {
        const { container } = render( <GifItem title={title} url={url} />);

        expect( container ).toMatchSnapshot()
    });

    test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
        render( <GifItem title={title} url={url} />);
        // expect( screen.getByRole("img").src ).toBe(url)
        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test("Debe mostrar el título del componente", () => {
        render( <GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy()
    });
})