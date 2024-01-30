export default function PricingTable() {
    return <div className={"p-8 h-screen max-w-7xl mx-auto "}>
            <span
                className={"my-4"}><b>Note</b>: use the same email you provided during registration.</span>
        <stripe-pricing-table pricing-table-id="prctbl_1OZFokBq28w2VvMb1xdOkH1r"
                              publishable-key="pk_live_51OPnjdBq28w2VvMbbghUdz6Dtyb81nCfCDI6EvWrxLNL8Oh2IcMgUAb1VkanhZS9aEY98OzJukgM80Dq5TIKSzKK00O71wYDEb">
        </stripe-pricing-table>
    </div>;
}