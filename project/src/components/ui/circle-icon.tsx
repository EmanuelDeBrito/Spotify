"use client"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    Icon: IconDefinition,
    active?: boolean
    onClick?: () => void
}

export const CircleIcon = ({ Icon, active, onClick }: Props) => {
    return(
        <div 
            className="
                flex justify-center items-center w-[40px] h-[40px] bg-black rounded-full transition-all cursor-pointer hover:scale-105 hover:opacity-80
            "
            onClick={onClick}
        >
            <FontAwesomeIcon 
                icon={Icon}
                className={`size-6 ${active ? 'text-white' : 'text-white/70'}`}
            />
        </div>
    )
}