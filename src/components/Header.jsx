export function Header() {
    return (
        <header className="bg-white shadow-lg p-6">
            <div className="container mx-auto flex items-center">
                <img src="/src/media/logo.png" alt="QuickFlick" className="h-8 w-8 mr-4"/>
                <h1 className="text-2xl font-semibold text-gray-800">QuickFlick</h1>
            </div>
        </header>
    );
}