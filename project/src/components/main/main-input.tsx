"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const MainInput = () => {
    const [searchField, setSearchField] = useState('');

    return( 
        <div className="w-[340px]">
            <Input 
                placeholder="O que você quer ouvir?"
                type="text"
                value={searchField}
                Icon={faSearch}
                onChange={e => setSearchField(e.target.value)}            
            />
        </div>
    )
}