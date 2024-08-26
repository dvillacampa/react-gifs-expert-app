export const retrieveGifs = async( category ) => {
    const apiKey1 = 'q5frEvKwrkWyPLqdv9L45O7JmkFx8ryW';
    const apiKey2 = 'w2KZZwJOGmuaLdxA97aJkNo4CnxLSxvB';
    const urlGifpySerach = 'https://api.giphy.com/v1/gifs/search';
    const limitImages = 50;

    const response =  await fetch(`${ urlGifpySerach }?api_key=${ apiKey1 }&q=${ category }&limit=${ limitImages }`);
    const { data } = await response.json();

    const returnGifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url,
    }));

    return returnGifs;
}