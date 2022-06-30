import {Col, Row} from "react-bootstrap";
import Preliminary from "../preliminary";
import Operation from "../operation";
import Fault from "../fault";
import {useEffect, useState} from "react";

const classList = {
    remove(classL, aClass) {
        document.querySelector(classL).classList.remove(aClass)
    },
    add(classL, aClass) {
        const els = document.querySelectorAll(classL)

        for (const el of els) {
            el.classList.add(aClass)
          }
    }
}

const TimeCols = () => {
    const [whichIsRunning, setWhichIsRunning] = useState(0)

    useEffect(() => {
        if (whichIsRunning === 0) {
            classList.remove(".page-wrapper", "bg-orange");
            classList.remove(".page-wrapper", "bg-green");
            classList.remove(".page-wrapper", "bg-red");
            classList.remove(".card-header", "bg-orange");
            classList.remove(".card-header", "bg-green");
            classList.remove(".card-header", "bg-red");
        }
        if (whichIsRunning === 1) {
            classList.add(".page-wrapper", "bg-orange");
            classList.add(".card-header", "bg-orange");
        }
        if (whichIsRunning === 2) {
            classList.add(".page-wrapper", "bg-green");
            classList.add(".card-header", "bg-green");
        }
        if (whichIsRunning === 3) {
            classList.add(".page-wrapper", "bg-red");
            classList.add(".card-header", "bg-red");
        }
    }, [whichIsRunning])

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