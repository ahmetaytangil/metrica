import {Col, Row} from "react-bootstrap";
import Preliminary from "../preliminary";
import Operation from "../operation";
import Fault from "../fault";
import {connect} from "react-redux";

const TimeCols = ({whichIsRunning}) => {
    return (
        <Row>
            <Col lg={6} style={
                {
                    width: "-webkit-fill-available"
                }
            }>
                <div className="card-group mb-3 text-center">
                    <Preliminary whichIsRunning={whichIsRunning}/>
                    <Operation whichIsRunning={whichIsRunning}/>
                    <Fault whichIsRunning={whichIsRunning}/>
                </div>
            </Col>
        </Row>
    );
};

const mapStateToProps = (state) => ({
   whichIsRunning: state.conditions.which_is_running
})

export default connect(mapStateToProps)(TimeCols);