import {Col, Row} from "react-bootstrap";
import Preliminary from "../preliminary";
import Operation from "../operation";
import Fault from "../fault";

const TimeCols = () => {
    return (
        <Row>
            <Col lg={6} style={
                {
                    paddingInline: "5%",
                    width: "-webkit-fill-available"
                }
            }>
                <div className="card-group mb-3 text-center">
                    <Preliminary/>
                    <Operation/>
                    <Fault/>
                </div>
            </Col>
        </Row>
    );
};

export default TimeCols;