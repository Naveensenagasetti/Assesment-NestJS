
import Link from "next/link";

const HeaderPage = () => {
    return (
        <div className="bg-black p-2 text-white text-3xl">
            <h1 className="text-center">Leads App</h1>
            <p className="text-center text-sm">A simple leads management app</p>
            <nav className="flex justify-center space-x-4 mt-2">
                <Link href="/" className="text-white hover:text-gray-400">Home</Link>
                <Link href="/leads" className="text-white hover:text-gray-400">Leads</Link>
                <Link href="/admin" className="text-white hover:text-gray-400">Admin</Link>
            </nav>
        </div>
    )
}
export default HeaderPage;