import Image from 'next/image'
import Link from 'next/link'


export default function Hamburger() {
    return (
        <Link href='/'>
            <Image src='/Images/Global/hamburger.svg' width={50} height={50} alt='Menu' />
        </Link>
    )
}
