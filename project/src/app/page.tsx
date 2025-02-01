import { Aside } from "@/components/ui/aside"
import { Footer } from "@/components/ui/footer"
import { Main } from "@/components/ui/main"

const Page = () => {
    return(
        <div className="flex gap-3">
            <Aside />
            <Main />
            <Footer />
        </div>
    )
}

export default Page