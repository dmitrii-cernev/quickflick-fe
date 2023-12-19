import {Typography} from "@material-tailwind/react";

export default function FooterWithLogo() {
    return (
        <footer className="w-full bg-white p-6 bg-opacity-30">
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 MiniMemo
            </Typography>
        </footer>
    );
}