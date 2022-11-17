export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=rgNRvlapgaZjsAmFD9Wc51kF7uJ09IKc&q=${category}&limit=10`

    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data)

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
}