import bgHero from "../assets/HeroImage.jpg"
import bgHero2 from "../assets/HeroImage2.jpg"
import bgHero3 from "../assets/HeroImage3.jpg"

export default function Home() {
    return (
        <section className='side'>
            <div className="flex justify-center items-center">
                <h1 className="md:text-[180px] text-[60px] text-[#232323] font-black uppercase">Do it <span className="text-[#4A69E2]">right</span></h1>
            </div>


            <div
                className="w-full rounded-3xl p-6 md:h-[600px] h-[350px] bg-cover flex justify-between items-end relative overflow-hidden "
                style={{ backgroundImage: `url(${bgHero})` }}>

                <div className="flex flex-col gap-2">
                    <div className="bg-[#232323] text-white p-2 rounded-br-2xl text16 absolute top-0 left-0">
                        <h1>Nike product of the year </h1>
                    </div>

                    <h1 className="text74 text-white">NIKE AIR MAX</h1>
                    <p className="text34 text-white">Nike introducing the new air max for everyone's comfort</p>
                    <button className='button1'>Shop now</button>
                </div>

                <div className="flex flex-col gap-2">
                    <img src={bgHero2} className="md:w-[160px] md:h-[160px] w-[60px] h-[60px] object-cover border-2 border-white rounded-2xl" />
                    <img src={bgHero3} className="md:w-[160px] md:h-[160px] w-[60px] h-[60px] object-cover border-2 border-white rounded-2xl" />
                </div>
            </div>
        </section>
    )
}
