import Link from 'next/link'
export default function Footer() {
    return (
        <section className="w-full h-[20vh] flex justify-center items-center">
            <div className="w-full flex flex-wrap justify-center items-center">
                <p className="w-full text-center mb-0 text-[#dcf3ff] text-sm md:text-base">Copyright © 2024 Melika Haqshenas</p>
                <ul className="xl:w-[50%] w-full h-10 mt-0 flex flex-wrap md:flex-nowrap justify-center items-center">
                    <li className="m-2 text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] text-sm md:text-base">
                        <Link href='#'>Home</Link>
                    </li>
                    <li className="m-2 list-inside list-disc text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] text-sm md:text-base">
                        <Link href='#'>Dashboard</Link>
                    </li>
                    <li className="m-2 list-inside list-disc text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] text-sm md:text-base">
                        <Link href='#'>Reports</Link>
                    </li>
                    <li className="m-2 list-inside list-disc text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] text-sm md:text-base">
                        <Link href='#'>Support</Link>
                    </li>
                    <li className="m-2 list-inside list-disc text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] text-sm md:text-base">
                        <Link href='#'>Contact</Link>
                    </li>
                </ul>
            </div>

        </section>
    )
}