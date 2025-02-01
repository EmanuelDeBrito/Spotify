type Props = {
    label: string
}

export const Subtitle = ({ label }: Props) => {
    return(
        <h2 className="text-[25px] text-white font-bold">
            {label}
        </h2>
    )
}