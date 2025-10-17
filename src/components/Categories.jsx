import lifeStyleShoes from "../assets/lifeStyleShoes.png"
import BasketballShoes from "../assets/BasketballShoes.png"

import { MdArrowOutward } from "react-icons/md";

export default function Categories() {

    const category = [
        {
            id: 1,
            img: lifeStyleShoes,
            tittle: "Lifestyle Shoes"
        },

        {
            id: 2,
            img: BasketballShoes,
            tittle: "Lifestyle Shoes"
        },
    ]

    return (
        <section className='side'>
            <h1 className='text74 text-white py-4'>Categories</h1>
            <div className="flex flex-col md:flex-row overflow-hidden rounded-t-3xl">
                {
                    category.map((item) => (
                        <div key={item.id}>

                            <div className="overflow-hidden relative">
                                <img src={item.img} className="md:w-[690px] md:h-[600px] w-full h-[350px] object-cover" />

                                <span className="absolute left-4 bottom-4 w-[450px] flex justify-between">
                                    <h1 className="text36">{item.tittle}</h1>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
