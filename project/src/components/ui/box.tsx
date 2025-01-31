import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    active?: boolean
}

export const Box = ({ children, active }: Props) => {
    return(
        <div className={`p-6 mt-3 rounded-[8px] ${active ? 'bg-[#1F1F1F]' : 'bg-[#121212]'}`}>
            {children}
        </div>
    )
}