"use client"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    label: string,
    Icon?: IconDefinition,
    border?: boolean,
    big?: boolean,
    onClick?: () => void
}

export const Button = ({ label, Icon, border, big, onClick }: Props) => {
    return(
        <div 
        className={`
            flex justify-center items-center gap-2 text-[15px] font-semibold rounded-full transition-all cursor-pointer
            ${big ? 'px-6 py-4' : 'px-3 py-2'}
            ${border ? 'bg-transparent text-white border border-[#525252] hover:border-white' : 'bg-white text-black'}
            hover:opacity-90 hover:scale-105
        `}
        onClick={onClick}
        >
            {Icon &&
                <FontAwesomeIcon 
                    icon={Icon}
                    className="size-4"
                />
            }
            {label}
        </div>
    )
}