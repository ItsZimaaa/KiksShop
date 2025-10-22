import { useEffect, useState } from "react"
import { FaQuoteLeft } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

import img1 from "../assets/glass/glass(1).png"
import img2 from "../assets/glass/glass(2).png"
import img3 from "../assets/glass/glass(3).png"
import img4 from "../assets/glass/glass(4).png"
import img5 from "../assets/glass/glass(5).png"
import img6 from "../assets/glass/glass(6).png"
import img7 from "../assets/glass/glass(7).png"
import img8 from "../assets/glass/glass(8).png"

export default function Reviews() {

    // useEffect
    const [Comments, setComments] = useState([]);
    const [Error, setError] = useState(null);

    useEffect(() => {
        async function loadComment() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");
                const data = await response.json();
                setComments(data);
            } catch (Error) {
                setError(Error.message);
            }
        }
        loadComment();
    }, []);

    const [SeeAll, setseeAll] = useState(false);
    const handleOpen = () => setseeAll(!SeeAll);

    const rotations = ["-3deg", "2deg", "-1.5deg", "3deg", "2deg", "-3deg", "2deg", "-2deg"];

    const bgImage = [img1, img2, img3, img4, img5, img6, img7, img8,];

    return (
        <section className='side py-8'>
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text74 text-white'>Our Reviews</h1>
                    <button className='button1' onClick={handleOpen}>See all</button>
                </div>

                <h1 className='text24 text-white'>What our <span className="text-[#4A69E2]">clients</span> say</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 pt-6">
                    {/* Caeds */}
                    {
                        Comments.slice(0, 8).map((comment, index) => {
                            return (
                                <div key={comment.id} style={{
                                    transform: `rotate(${rotations[index % rotations.length]})`,
                                    transition: "transform 0.4s ease",
                                }} className=" relative overflow-hidden p-6 flex flex-col gap-6 bg-[#232323] text-white rounded-3xl grayscale-100 hover:grayscale-0 shadow-2xl hover:scale-105 ease-in duration-300">

                                    <img
                                        src={bgImage[index % bgImage.length]}
                                        alt="background"
                                        className="absolute z-[0] opacity-40 translate-x-30"
                                    />

                                    <div className="flex justify-between items-center z-1">
                                        <div className="w-[50px] h-[50px] rounded-3xl bg-white text-[#232323] text-2xl flex justify-center items-center"><BsFillPeopleFill /></div>
                                        <button className="button1">Response</button>
                                    </div>
                                    <span><FaQuoteLeft /></span>
                                    <div className="z-1">
                                        <p>{comment.body}</p>
                                    </div>
                                    <div className="border-l-4 border-gray-200 px-2 z-1">
                                        <h1 className="font-bold">{comment.name}</h1>
                                        <p className="text-gray-200 text-[12px]">{comment.email}</p>
                                        <p className="text-gray-200 text-[12px]">Uzbekistan. Namangan</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pt-10 flex flex-col gap-10">
                    {
                        SeeAll && (
                            Comments.map((comment, index) => {
                                return (
                                    <div key={comment.id} style={{
                                        transform: `rotate(${rotations[index % rotations.length]})`,
                                        transition: "transform 0.4s ease",
                                    }} className=" relative overflow-hidden p-6 flex flex-col gap-6 bg-[#232323] text-white rounded-3xl grayscale-100 hover:grayscale-0 shadow-2xl hover:scale-105 ease-in duration-300">

                                        <img
                                            src={bgImage[index % bgImage.length]}
                                            alt="background"
                                            className="absolute z-[0] opacity-40 translate-x-30"
                                        />

                                        <div className="flex justify-between items-center z-1">
                                            <div className="w-[50px] h-[50px] rounded-3xl bg-white text-[#232323] text-2xl flex justify-center items-center"><BsFillPeopleFill /></div>
                                            <button className="button1">Response</button>
                                        </div>
                                        <span><FaQuoteLeft /></span>
                                        <div className="z-1">
                                            <p>{comment.body}</p>
                                        </div>
                                        <div className="border-l-4 border-gray-200 px-2 z-1">
                                            <h1 className="font-bold">{comment.name}</h1>
                                            <p className="text-gray-200 text-[12px]">{comment.email}</p>
                                            <p className="text-gray-200 text-[12px]">Uzbekistan. Namangan</p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </section>
    )
}
