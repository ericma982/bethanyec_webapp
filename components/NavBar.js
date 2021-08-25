import Link from 'next/link';
import Image from 'next/image'

export default function NavBar() {
    return (
        //look for no overflow
        <nav className="flex items-center flex-wrap py-3 px-8 shadow-md ">
            <Link href="/">
                <a className="inline-flex">
                    <Image src="/images/logoResize2.png"
                        width={100}
                        height={50}
                        layout="intrinsic"

                    />
                </a>
            </Link>
            <div className="inline-flex flex-grow w-auto">
                <div className="lg:flex-row lg:inline-flex lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                    <Link href="https://secure.goemerchant.com/secure/custompayment/bethanypresbyterianchurch/13342/default.aspx?"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">Giving</a></Link>
                    <Link href="/about"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">About Us</a></Link>
                    <Link href="/life-group"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">Life Group</a></Link>
                    <Link href="/families"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">Families</a></Link>
                    <Link href="/contact-us"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">Contact Us</a></Link>
                    <Link href="/first-time"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">First Time?</a></Link>
                </div>

            </div>


        </nav>
    );
};