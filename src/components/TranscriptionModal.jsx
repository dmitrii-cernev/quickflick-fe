import {Modal, Tooltip} from "flowbite-react";
import {toast} from "react-toastify";
import {MdContentCopy} from "react-icons/md";

export default function TranscriptionModal(transcriptionModal, setTranscriptionModal, currentTranscription, title) {
    return <Modal
        show={transcriptionModal}
        onClose={() => setTranscriptionModal(false)}
        size="5xl"
        dismissible
        popup
    >
        <Modal.Header className={""}>
            <div className={"w-full flex gap-x-2 justify-between"}>
                <span className={""}>{title}</span>
                <div className={""}>
                    <Tooltip content={"Copy transcription"} style={"light"} animation={"delay-700"}>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(currentTranscription).then(() => console.log("Copied to clipboard"));
                                toast.info("Copied to clipboard")
                            }}
                            className="text-lg bg-white text-gray-300 hover:text-gray-600 transition"
                        >
                            <MdContentCopy size={25} className="inline-block"/>
                        </button>
                    </Tooltip>
                </div>
            </div>
        </Modal.Header>

        <Modal.Body>
            {currentTranscription}
        </Modal.Body>

    </Modal>;
}