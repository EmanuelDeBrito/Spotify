import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { Box } from "./box"
import { CircleIcon } from "./circle-icon"
import { MainInput } from "../main/main-input"
import { Button } from "./button"
import Link from "next/link"
import { Title } from "./title"
import { Subtitle } from "./subtitle"

export const Main = () => {
    return(
        <main className="flex-1 pr-2">
            <Box>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <CircleIcon 
                            Icon={faAngleLeft}
                            active
                        />
                        <CircleIcon 
                            Icon={faAngleRight}
                        />
                    </div>

                    <MainInput />

                    <div className="flex items-center">
                        <Link 
                            href={""}
                            className="px-6 text-[16px] text-[#AEAEAE] font-semibold transition-all hover:text-white hover:scale-105"
                        >
                            Inscreva-se
                        </Link>
                        <Button 
                            label="Iniciar Sessão"
                            big
                        />
                    </div>
                </div>
            </Box>
            <Box>
                <Title 
                    label="Bom dia"
                />

                <div className="mt-10">
                    <Subtitle 
                        label="Navegar por todas as seções"
                    />
                </div>
            </Box>
        </main>
    )
}