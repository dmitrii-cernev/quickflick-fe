import {useState} from 'react';
import {FloatingLabel} from "flowbite-react";
import {request, setAuthToken} from "../util/axios_util.jsx";
import {toast} from "react-toastify";

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    const isFormValid = () => {
        return (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() === password.trim());
    };

    const handleRegister = async () => {
        if (isFormValid()) {
            setAuthToken(null)
            try {
                const register = await request('POST', '/register', {
                    firstName: firstName,
                    lastName: lastName,
                    login: email,
                    password: password
                })
                await setAuthToken(register.data.token)
                console.log('Registration successful');
                setRegistrationError('');
                window.location.href = "/"
            } catch (e) {
                toast.warning("User already exists!")
            }
        } else {
            setRegistrationError('Please fill in all fields correctly.');
        }
    };

    return (<div
        className="flex justify-center items-center h-screen sm:bg-gray-100 sm:bg-opacity-40 w-11/12 m-4 mx-auto rounded-xl animate-fade animate-duration-200">
        <div className="sm:w-5/12 bg-white p-8 sm:px-12 rounded-lg shadow-md bg-opacity-40">
            <h1 className="text-2xl font-bold mb-6">Register</h1>

            {registrationError && <p className="text-red-500 mb-4">{registrationError}</p>}

            <form className="flex flex-col text-left gap-4">
                <FloatingLabel variant={"standard"}
                               label={"First Name"}
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                               className={""}
                />
                <FloatingLabel variant={"standard"}
                               label={"Last Name"}
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                               className={""}
                />
                <FloatingLabel variant={"standard"}
                               label={"Email"}
                               type={"email"}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               className={""}
                />
                <FloatingLabel variant={"standard"}
                               label={"Password"}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className={""}
                               type={"password"}
                />
                <FloatingLabel variant={"standard"}
                               label={"Confirm Password"}
                               value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}
                               className={""}
                               type={"password"}
                />

                <button
                    type="button"
                    onClick={handleRegister}
                    disabled={!isFormValid()}
                    className={`mx-auto p-4 text-lg text-white py-2 font-semibold bg-gradient-to-r from-blue-300 to-pink-400 
                        ${!isFormValid() && 'opacity-50 cursor-not-allowed'} 
                        hover:from-blue-300 hover:to-pink-600 focus:outline-none rounded-full`}
                >
                    Sign Up
                </button>
            </form>
        </div>
    </div>);
};

export default RegistrationPage;
