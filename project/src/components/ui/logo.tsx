import Image from "next/image"
import Link from "next/link"

type Props = {
    width: number,
    height: number
}

export const Logo = ({ width, height }: Props) => {
    return(
        <Link href={""}>
            <Image 
                src={'/logo.png'}
                width={width}
                height={height}
                alt='Logo'
                quality={100}
            />        
        </Link>
    )
}