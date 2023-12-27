import {useState} from 'react';
import {Link} from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = () => {
        return username !== '' && password !== '';
    };

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login button clicked');
    };

    return (
        <div
            className="w-11/12 mx-auto flex justify-center items-center h-screen my-4 sm:bg-white sm:bg-opacity-40 rounded-xl animate-fade animate-duration-200">
            <div className="sm:w-5/12 bg-white bg-opacity-40 p-8 rounded-md shadow-md">
                <h1 className="text-2xl font-bold">Sign In</h1>

                <form className="flex flex-col my-4">
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
                        disabled={!isFormValid()}
                        className={`text-lg font-semibold bg-gradient-to-r from-blue-300 to-pink-400 ${
                            isFormValid()
                                ? 'text-white hover:from-blue-300 hover:to-pink-600 focus:outline-none'
                                : 'text-gray-700 cursor-not-allowed opacity-50'
                        } p-2 rounded-full transition-all`}
                    >
                        Login
                    </button>
                </form>
                <Link to="/register" className="text-sm text-blue-500 hover:underline">
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
