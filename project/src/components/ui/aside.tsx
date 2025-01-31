import { faBarsStaggered, faHome, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { NavItem } from "../nav/nav-item"
import { Box } from "./box"
import { Logo } from "./logo"

export const Aside = () => {
    return(
        <aside className="fixed top-0 left-0 w-[370px] p-2">
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

                        <p className="mt-5 text-[14px] text-[#EBEBEB]">É fácil vamos te ajudar.</p>
                    </Box>
                </div>
            </Box>
        </aside>
    )
}