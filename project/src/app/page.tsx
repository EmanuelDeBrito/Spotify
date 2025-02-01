import { Aside } from "@/components/ui/aside"
import { Main } from "@/components/ui/main"

const Page = () => {
    return(
        <div className="flex gap-3">
            <Aside />
            <Main />
        </div>
    )
}

export default Page