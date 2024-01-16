export default function PricingPage() {
    return (
        <div className={"h-screen max-w-7xl mx-auto "}>
            <span
                className={""}><b>Note</b>: use the same email you provided during registration.</span>
            <br/>
            <stripe-pricing-table pricing-table-id="prctbl_1OZFokBq28w2VvMb1xdOkH1r"
                                  publishable-key="pk_live_51OPnjdBq28w2VvMbbghUdz6Dtyb81nCfCDI6EvWrxLNL8Oh2IcMgUAb1VkanhZS9aEY98OzJukgM80Dq5TIKSzKK00O71wYDEb">
            </stripe-pricing-table>
        </div>
    )
}