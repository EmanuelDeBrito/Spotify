type Props = {
    label: string,
}

export const Title = ({ label }: Props) => {
    return(
        <h1 className="text-[30px] text-white font-bold">
            {label}
        </h1>
    )
}