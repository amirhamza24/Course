import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    return (
        <div>
            <Helmet>
                <title>TopSpin | Enrollment Class</title>
            </Helmet>

            <SectionTitle
                subHeading="All Payment History"
                heading="payment history"
            ></SectionTitle>

            <h2>All Payments History Here</h2>
        </div>
    );
};

export default PaymentHistory;