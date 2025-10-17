import Logo from "../assets/Logo.svg"
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
    return (
        <nav className="side flex justify-between items-center py-4 px-4 mt-4 rounded-3xl bg-white">
            <span className="w-[300px] md:hidden">
                <FiMenu />
            </span>

            <ul className="md:flex gap-5 md:w-[320px] hidden items-center text16">
                <li className="flex items-center gap-1">NewDrops<BsFire/></li>
                <li>Men</li>
                <li>Women</li>
            </ul>

            <img src={Logo} />

            <span className="flex gap-5 w-[320px] justify-end items-center text16">
                <IoSearchOutline className="hidden md:block" />
                <IoMdPerson />

                <h1 className="bg-amber-200 w-[32px] h-[32px] flex justify-center items-center rounded-4xl">0</h1>
            </span>
        </nav>
    )
}
