import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, FloatingLabel} from "flowbite-react";
import {request, setAuthToken, setRefreshToken} from "../util/axios_util.jsx";
import {toast} from "react-toastify";
import {notifyDefaultError} from "../util/toast_util.jsx";

function notifyWarning() {
    toast.warning("Wrong login or password")
}

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = () => {
        return username !== '' && password !== '';
    };

    const handleLogin = async () => {
        setAuthToken(null)
        setRefreshToken(null)
        try {
            const login = await request('POST', '/auth/login', {
                login: username.toLowerCase(),
                password: password
            })
            if (login.status === 200) {
                await setAuthToken(login.data.token);
                await setRefreshToken(login.data.refreshToken);
            }
            console.log('Logged in!');
            window.location.href = "/";
        } catch (e) {
            console.log(e)
            switch (e.response['status']) {
                case 401:
                    notifyWarning();
                    break;
                case 404:
                    notifyWarning();
                    break;
                case 400:
                    notifyWarning();
                    break;
                default:
                    notifyDefaultError()
            }
        }
    };

    return (
        <div className={"main-gradient p-8"}>
            <div
                className="w-11/12 mx-auto flex justify-center items-center h-screen sm:bg-white sm:bg-opacity-40 rounded-xl animate-fade animate-duration-200">
                <div
                    className="bg-white bg-opacity-40 p-8 rounded-md shadow-md flex-grow sm:flex-grow-0">
                    <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>

                    <form
                        className="flex flex-col gap-y-4 my-4 text-left items-center justify-between">
                        <FloatingLabel variant={"standard"}
                                       label={"Email"}
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                       className={"xs:w-72 sm:w-96"}
                        />
                        <div>
                            <FloatingLabel variant={"standard"} label={"Password"}
                                           type={"password"}
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           onKeyPress={(e) => {
                                               if (e.key === 'Enter') {
                                                   handleLogin()
                                               }
                                           }}
                                           className={"xs:w-72 sm:w-96"}
                            />
                            <span
                                className="m-2 text-xs text-blue-400 hover:underline cursor-pointer"
                                onClick={() => {
                                    toast.warning("Please contact support to reset your password")
                                }}
                            >Forgot password?</span>
                        </div>
                        <Button
                            pill
                            size={"lg"}
                            onClick={handleLogin}
                            disabled={!isFormValid()}
                            gradientDuoTone="purpleToPink"
                            className={` sm:w-3/12 font-semibold bg-gradient-to-r from-blue-300 to-pink-400 ${isFormValid() ? 'text-white hover:from-blue-300 hover:to-pink-600 focus:outline-none' : 'text-gray-700 cursor-not-allowed opacity-50'}  transition-all`}
                        >
                            Login
                        </Button>
                    </form>
                    <Link to="/register"
                          className="text-lg font-semibold text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
