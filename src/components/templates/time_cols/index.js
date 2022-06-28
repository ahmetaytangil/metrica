import {Col, Row} from "react-bootstrap";
import Preliminary from "../preliminary";
import Operation from "../operation";
import Fault from "../fault";
import {useState} from "react";

const TimeCols = () => {
    const [whichIsRunning, setWhichIsRunning] = useState(0)
    return (
        <Row>
            <Col lg={6} style={
                {
                    paddingInline: "5%",
                    width: "-webkit-fill-available"
                }
            }>
                <div className="card-group mb-3 text-center">
                    <Preliminary
                        whichIsRunning={whichIsRunning}
                        onRunningChange={(num) => setWhichIsRunning(num)}
                    />
                    <Operation
                        whichIsRunning={whichIsRunning}
                        onRunningChange={(num) => setWhichIsRunning(num)}
                    />
                    <Fault
                        whichIsRunning={whichIsRunning}
                        onRunningChange={(num) => setWhichIsRunning(num)}
                    />
                </div>
            </Col>
        </Row>
    );
};

export default TimeCols;