import logo from "../media/logo.svg"

export function Header() {
    return (
        <header className="bg-white shadow-lg p-5">
            <div className="container mx-auto flex items-center">
                <img src={logo} alt="MiniMemo" className="h-10 w-10 mr-4"/>
                <h1 className="text-[1.75rem] font-semibold text-gray-800">MiniMemo</h1>
            </div>
        </header>
    );
}