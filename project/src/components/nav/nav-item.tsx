import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type Props = {
    Icon: IconDefinition,
    label: string,
    href: string,
    rightIcon?: IconDefinition
}

export const NavItem = ({ Icon, label, href, rightIcon }: Props) => {
    return(
        <Link href={href} className="text-[#B3B3B3] hover:text-white">
            <li className="flex items-center gap-4">
                <FontAwesomeIcon 
                    icon={Icon}
                    className="size-6"                
                />
                <span className="text-[16px] font-semibold">{label}</span>
                {rightIcon &&
                    <div className="flex-1 flex justify-end">
                        <FontAwesomeIcon 
                            icon={rightIcon}
                            className="size-6"                        
                        />
                    </div>
                }
            </li>
        </Link>
    )
}