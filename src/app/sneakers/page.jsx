'use server'
import getAllSneakers from "../../../lib/getAllSneakers";
import Link from 'next/link'
const convertToUSD = priceCents => (priceCents / 100).toFixed(2);

async function Sneakers() {
    const sneakersJson =  getAllSneakers();
    const sneakersData = await sneakersJson

    return (
        <div className="text-center">
            {!sneakersData ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {sneakersData?.response?.results.map(result => (
                        <Link href={`sneakers/${result.data.id}`} key={result.data.id} className="border border-gray-300 p-2 m-2 text-center w-72 block hover:bg-gray-200  hover:text-black cursor-pointer">
                           
                                <h3 className="font-semibold">{result.data.slug}</h3>
                                <img src={result.data.image_url} alt={result.data.slug} className="max-w-full max-h-52 mb-2" />
                                <p>
                                    Retail Price: ${convertToUSD(result.data.retail_price_cents)}
                                </p>
                            
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
            }
export default Sneakers;
