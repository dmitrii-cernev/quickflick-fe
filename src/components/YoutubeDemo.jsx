export function YoutubeDemo() {
    return (
        <div className={"main-gradient"}>
            <div className={"h-[85vh]"}>
                <h1 className={"text-5xl text-center font-semibold text-white p-8"}>Mobile Demo</h1>
                <iframe className={"min-w-[20rem] sm:w-1/4 h-4/5 mx-auto my-auto"}
                        src="https://youtube.com/embed/xdauuikjvoY?si=R1HkChalr7meU_Di"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />
            </div>
        </div>
    )
}