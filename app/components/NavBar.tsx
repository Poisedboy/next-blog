import Link from "next/link"
import { ThemeButton } from "./ThemeButton"

export const Navbar = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href='/'>
                        <h1 className="text-2xl font-medium">
                            Serhii`s <span className="text-teal-500">Blog</span>
                        </h1>
                    </Link>
                    <ThemeButton />
                </div>
            </div>
        </div>
    )
}
