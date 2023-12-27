import {useState} from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login button clicked');
    };

    return (
        <div
            className=" w-11/12 mx-auto flex justify-center items-center h-screen bg-white bg-opacity-40 rounded-xl">
            <div className="bg-white p-8 rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-6">Login</h1>

                <form className="flex flex-col">
                    <label className="mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md mb-4"
                    />

                    <label className="mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md mb-6"
                    />

                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
