import {Label, Modal, Sidebar, TextInput} from "flowbite-react";
import {IoMdInformationCircleOutline} from "react-icons/io";
import {MdOutlinePayment} from "react-icons/md";
import {CiLogout} from "react-icons/ci";
import {useEffect, useState} from "react";
import {logout, request} from "../util/axios_util.jsx";


function renderView(view, userInfo) {
    function billingView() {
        return (
            <div>
                <p className={"p-4 text-2xl font-bold"}>Open billing portal:</p>
                <button
                    className={"bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 m-4 rounded-3xl"}
                    onClick={event => {
                        window.open("https://billing.stripe.com/p/login/test_aEU5np4OycGb4z6fYY", "_blank")
                    }}
                >
                    Open
                </button>
            </div>
        );
    }

    function infoView() {
        return (
            <div
                className={" p-4 flex flex-col items-start justify-center mx-auto animate-fade animate-duration-75"}>
                <Label value={"Name:"}/>
                <TextInput
                    className={"w-full"}
                    value={userInfo.firstName + " " + userInfo.lastName}
                    disabled={true}
                />
                <Label value={"Email:"}/>
                <TextInput
                    className={"w-full"}
                    value={userInfo.login}
                    disabled={true}
                />
            </div>
        );
    }

    function defaultView() {
        return (
            <div
                className={"h-96 w-1/2 p-4 flex flex-col items-center justify-center mx-auto bg-white bg-opacity-40 rounded-xl animate-fade animate-duration-75"}>
                <p className={"text-4xl font-bold"}>Welcome</p>
            </div>
        );
    }

    switch (view) {
        case "info":
            return infoView()
        case "billing":
            return billingView()
        default:
            return defaultView()
    }
}

export default function CustomerPortal() {
    const [view, setView] = useState("info");
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        login: ""
    });
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request("GET", "/api/auth/user", {});
                setUserInfo(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className={"h-screen"}>
            <div className={"h-auto  flex flex-wrap"}>
                <Sidebar className={"w-full sm:w-1/6 mb-5"}>
                    <Sidebar.ItemGroup>
                        <Sidebar.Items>
                            <Sidebar.Item className={"cursor-pointer w-full"} as={"button"}
                                          onClick={event => setView("info")}
                                          icon={IoMdInformationCircleOutline}>
                                Info
                            </Sidebar.Item>
                            <Sidebar.Item
                                as={"button"}
                                className={"cursor-pointer w-full"}
                                icon={MdOutlinePayment}
                                onClick={event => setView("billing")}>
                                Billing
                            </Sidebar.Item>
                            <Sidebar.Item
                                as={"button"}
                                className={"cursor-pointer w-full"} icon={CiLogout}
                                onClick={event => {
                                    setOpenModal(true)
                                }}>
                                Logout
                            </Sidebar.Item>
                        </Sidebar.Items>
                    </Sidebar.ItemGroup>
                </Sidebar>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>
                        <p className={"text-2xl font-bold"}>Logout</p>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to logout?</p>
                        <div className={"flex flex-row justify-end"}>
                            <button
                                className={"font-semibold py-2 px-4 m-4 text-gray-700 hover:underline"}
                                onClick={event => {
                                    logout();
                                    window.location.href = "/"
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className={"font-bold py-2 px-4 m-4 text-gray-700 hover:underline"}
                                onClick={event => {
                                    setOpenModal(false)
                                }}
                            >
                                No
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
                <div
                    className={" p-4 m-auto bg-white bg-opacity-40 rounded-xl animate-fade animate-duration-75"}>
                    {renderView(view, userInfo)}
                </div>
            </div>
        </div>
    )
}