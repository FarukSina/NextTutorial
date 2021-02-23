import SeoHead from "../components/SeoHead"
import Link from "next/link"
export default function about() {
    return (
        <div>
            <SeoHead title="About Next JS" keywords="Next is Amazing" content="Next js server 
            side and client side rendering"/>

            <h1>About Page</h1>
            <Link href="/">Go Back</Link>
        </div>
    )
}
