"use client"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent } from "react"

type Props = {
    placeholder: string,
    type: 'text' | 'password'
    value: string, 
    Icon?: IconDefinition,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void 
}

export const Input = ({ placeholder, type, value, Icon, onChange }: Props) => {
    return(
        <div 
            className="
                flex items-center h-[50px] px-4 bg-[#2A2A2A] text-[16px] text-white rounded-full border-2 border-transparent overflow-hidden
                has-[:focus]:border-white
            "
        >
            {Icon &&
                <FontAwesomeIcon 
                    icon={Icon}
                    className="size-5 mr-3 text-white"
                />
            }
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-[80%] bg-transparent border-none outline-none"
            />
        </div>
    )
}