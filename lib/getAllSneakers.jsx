

async function getAllSneakers() {

    const res = await fetch('https://ac.cnstrc.com/search/Jordan%201%20Low?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=78c62706-b971-46fb-beee-6ed7b4dab4d0&s=2&page=1&num_results_per_page=24&filters%5Bdiscount_tag%5D=under_retail&filters%5Blowest_price_cents%5D=2700-7700&filters%5Bgender%5D=men&sort_by=relevance&sort_order=descending&fmt_options%5Bhidden_fields%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_fields%5D=gp_instant_ship_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_lowest_price_cents_3&fmt_options%5Bhidden_facets%5D=gp_instant_ship_lowest_price_cents_3&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_3%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_3%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=1704156540890',{next:{revalidate:60}})
   if(!res.ok) throw new Error('Data not fetched!')
   return res.json()
}

export default getAllSneakers