export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=20RxlPaLEinXeTtlTiTEhEZOpV2W5QPQ&q=${category}&limit=10`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((imagen) => ({
    id: imagen.id,
    title: imagen.title,
    url: imagen.images.downsized_medium.url,
  }));

  return gifs;
};
