type Props = {
    image: string
}

export const Card = ({ image }: Props) => {
    return(
        <div 
            className="w-full h-[300px] bg-center bg-cover bg-no-repeat rounded-[10px] transition-all cursor-pointer hover:scale-105"
            style={{ backgroundImage: "url("+ image +")" }}
        >

        </div>
    )
}