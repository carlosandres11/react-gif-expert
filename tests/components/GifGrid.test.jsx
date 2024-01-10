import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en componente <GifGrid />",() => {
    const category = "One Punch"

    test("debe mostrar el loading iniciamente", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={category}/> )
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category))
    });

    test("debe mostrar items cuando se cargan las imágenes useFetchGifs", () => {

        const gifs = [
            {
                id:123,
                title: "Goku",
                url: "https://Holasoy.jpg",
            },
            {
                id:321,
                title: "Vegeta",
                url: "https://Holasoys.jpg",
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={category}/> );

        // screen.debug();

        expect(screen.getAllByRole("img").length).toBe(2)

    });
});