import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { Box } from "./box"
import { CircleIcon } from "./circle-icon"
import { MainInput } from "../main/main-input"
import { Button } from "./button"
import Link from "next/link"
import { Title } from "./title"
import { Subtitle } from "./subtitle"
import { categoriesData } from "@/data/categoriesData"
import { Card } from "./card"

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
                <div className="h-[53vh] overflow-y-scroll">
                    <Title 
                        label="Bom dia"
                    />

                    <div className="mt-10">
                        <Subtitle 
                            label="Navegar por todas as seções"
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-6 mt-3">
                        {categoriesData.map((item, key) => (
                            <Card 
                                image={item.image}
                                key={key}
                            />
                        ))}
                    </div>
                </div>
            </Box>
        </main>
    )
}