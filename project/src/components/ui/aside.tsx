import { faBarsStaggered, faGlobe, faHome, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { NavItem } from "../nav/nav-item"
import { Box } from "./box"
import { Logo } from "./logo"
import { Button } from "./button"

export const Aside = () => {
    return(
        <aside className="sticky top-0 left-0 w-[370px] px-2">
            <Box>
                <Logo 
                    width={100}
                    height={100}                
                />

                <nav className="mt-8">
                    <ul className="flex flex-col gap-6">
                        <NavItem 
                            Icon={faHome}
                            label="Início"
                            href=""                        
                        />
                        <NavItem 
                            Icon={faSearch}
                            label="Buscar"                            
                            href=""                        
                        />
                    </ul>
                </nav>
            </Box>

            <Box>
                <NavItem 
                    Icon={faBarsStaggered}
                    label="Sua Biblioteca"
                    href=""
                    rightIcon={faPlus}                
                />

                <div className="mt-5">
                    <Box active>
                        <p className="text-[16px] text-white font-semibold">Crie sua primeira Playlist</p>

                        <p className="my-5 text-[14px] text-[#B3B3B3]">É fácil vamos te ajudar.</p>

                        <div className="w-[130px]">
                            <Button 
                                label="Criar Playlist"
                            />
                        </div>

                    </Box>
                </div>

                <span 
                    className="
                        inline-block mt-6 mb-5 text-[13px] text-[#B3B3B3] transition-all cursor-pointer hover:underline
                    "
                >
                    Cookies
                </span>

                <div className="w-[130px]">
                    <Button 
                        label="Português"
                        Icon={faGlobe}
                        border
                    />
                </div>
            </Box>
        </aside>
    )
}