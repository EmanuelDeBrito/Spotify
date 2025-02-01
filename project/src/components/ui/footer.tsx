import { Button } from "./button"

export const Footer = () => {
    return(
        <footer className="fixed right-0 bottom-0 left-0 flex justify-between items-center h-[80px] px-4 bg-gradient-to-r from-pink-500 to-blue-500">
            <div className="text-[14px] text-white">
                <p className="uppercase">Testar o Premium de graça</p>
                <p className="mt-2">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
                </p>
            </div>

            <div className="w-[230px]">
                <Button 
                    label="Inscreva-se grátis"
                    big
                />
            </div>
        </footer>
    )
}