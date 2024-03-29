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
                    window.open("https://billing.stripe.com/p/login/7sI9CE7ong5PfpS4gg", "_blank")
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
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        login: ""
    });
    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request("GET", "/api/auth/user", {});
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData().then(() => {
            console.log("Fetched user data");
        });
    }, []);


    return (
        <div className={"h-screen main-gradient p-8"}>
            <div
                className={"h-auto flex items-center justify-center bg-white bg-opacity-40 p-4 md:w-1/2 mx-auto rounded-2xl"}>
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
                                setOpenLogoutModal(true)
                            }}
                        >
                            Log out
                        </button>
                    </Tabs.Item>

                </Tabs>
                <Modal show={openLogoutModal} onClose={() => setOpenLogoutModal(false)}>
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
                                    setOpenLogoutModal(false)
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