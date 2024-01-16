import {Label, Modal, Tabs, TextInput} from "flowbite-react";
import {IoMdInformationCircleOutline} from "react-icons/io";
import {MdOutlinePayment} from "react-icons/md";
import {CiLogout} from "react-icons/ci";
import {useEffect, useState} from "react";
import {logout, request} from "../util/axios_util.jsx";


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

function infoView(userInfo) {
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
            <div className={"h-auto flex items-center justify-center"}>
                <Tabs>
                    <Tabs.Item title={"Info"} icon={IoMdInformationCircleOutline} active>
                        {infoView(userInfo)}
                    </Tabs.Item>
                    <Tabs.Item title={"Billing"} icon={MdOutlinePayment}>
                        {billingView()}
                    </Tabs.Item>
                    <Tabs.Item title={"Log out"} icon={CiLogout}>
                        <button
                            className={"bg-violet-500 font-bold py-2 px-4 m-4 text-gray-100 rounded-full hover:bg-violet-700"}
                            onClick={event => {
                                setOpenModal(true)
                            }}
                        >
                            Log out
                        </button>
                    </Tabs.Item>

                </Tabs>
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
            </div>
        </div>
    )
}