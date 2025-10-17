import adidas1 from "../src/assets/adidas1.png"
import adidas2 from "../src/assets/adidas2.png"
import adidas3 from "../src/assets/adidas3.png"
import adidas4 from "../src/assets/adidas4.png"

export default function NewDrops() {

    const adidas = [
        {
            id: 1,
            title: "Adidas 4DFWD X Parley running shoes",
            img: adidas1,
            price: "$125"
        },

        {
            id: 2,
            title: "Adidas 4DFWD X Parley running shoes",
            img: adidas2,
            price: "$110"
        },

        {
            id: 3,
            title: "Adidas 4DFWD X Parley running shoes",
            img: adidas3,
            price: "$99"
        },

        {
            id: 4,
            title: "Adidas 4DFWD X Parley running shoes",
            img: adidas4,
            price: "$155"
        }
    ]

    return (
        <section className='side py-4'>
            <div>
                <span className="flex flex-row justify-between items-center">
                    <h1 className='text74'>Don’t miss out new drops</h1>
                    <button className='button1'>Shop new drops</button>
                </span>

                {/* Card */}
                <div className="gap-4 items-center mt-4 grid md:grid-cols-4 grid-cols-2">
                    {adidas.map((item) => (
                        <div key={item.id} className="md:w-[320px] flex flex-col">
                            <div className="flex overflow-hidden justify-center items-center bg-white rounded-3xl hover:shadow-2xl ease-in-out duration-300 relative">
                                <span className="absolute top-2 left-2 bg-[#4A69E2] w-[60px] h-[30px] flex justify-center items-center text-white rounded-tl-3xl rounded-br-3xl">
                                    <h1>New</h1>
                                </span>
                                <img src={item.img} className="md:w-[320px] md:h-[350px] object-cover rounded-4xl p-2" />
                            </div>

                            <h1 className="text24">{item.title}</h1>

                            <button className="button2">View Product - <span className="text-amber-300">{item.price}</span></button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
