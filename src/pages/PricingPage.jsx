export default function PricingPage() {
    return (
        <div className={"h-screen max-w-7xl mx-auto "}>
            <stripe-pricing-table pricing-table-id="prctbl_1OT98WBq28w2VvMbInH1XoBv"
                                  publishable-key="pk_test_51OPnjdBq28w2VvMbhSAPND44VH7xWP5QF6FmqpnZ7YXDvvN2ehpuSdMqwOx5Ck3IECJQzhCGQAgI9amzRMIgjKhr00kTAY78mA">
            </stripe-pricing-table>
        </div>
    )
}