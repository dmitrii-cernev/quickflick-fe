export default function ApiPage() {
    return (
        <div
            className="w-11/12 mx-auto container text-left mb-6 min-h-screen bg-white bg-opacity-40 p-10 sm:p-20 rounded-xl animate-fade animate-duration-200">
            <h1 className="text-4xl font-bold mb-4">API</h1>
            <p className="text-lg font-semibold mb-2">Minimemo provides a simple API for developers
                to use.</p>
            <p className="text-lg mb-2 text-red-500 font-semibold bg-white bg-opacity-40 rounded-2xl p-2">The
                API is currently in beta and
                is subject to change.</p>
        </div>
    )
}