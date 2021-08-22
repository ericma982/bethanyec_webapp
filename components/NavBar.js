import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex items-center flex-wrap py-3 px-8 shadow-md">
            <Link href="/">
                <a className="font-bold ">Home</a>
            </Link>
            <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
                <div className="lg:flex-row lg:inline-flex lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                    <Link href="/giving"><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">Giving</a></Link>
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