import getAllSneakers from "./getAllSneakers"

async function getSneaker(sneakerId) {
    const res = await fetch(`https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${sneakerId}&countryCode=US`, {next:{revalidate:60}});
    if (!res.ok) throw new Error('Fetched failed sneaker data');
    
    const sneakersJson = await getAllSneakers();
    const sneaker_img = sneakersJson.response.results.find(s => s.data.id === sneakerId).data.image_url;
    const sneaker_name = sneakersJson.response.results.find(s => s.data.id === sneakerId).value;
    const sneakerData = await res.json();
    return { sneakerData, sneaker_img, sneaker_name};
}

export default getSneaker;
