import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-4 bg-white z-10 pt-8">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                            alt="EvPay logo"
                            width={167}
                            height={55.67}
                        />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;