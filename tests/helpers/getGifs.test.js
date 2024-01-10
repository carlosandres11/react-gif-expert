import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("Debe retornar un arreglo de Gifs", async () => {
    const gifs = await getGifs("One Punch");
    // console.log(gifs);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
