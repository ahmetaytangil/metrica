import Topbar from "../../UI/organisms/topbar";
import {layout_styles} from "../../../constants/class_names";
import {Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {colorCond} from "../../../utils/helpers";


const Layout = ({children, title, whichIsRunning, faultRunning}) => {
    const color_conditions = colorCond(whichIsRunning, false, faultRunning);

    return (
        <>
            <Topbar title={title}/>
            <div
                className={layout_styles.root + color_conditions}
                style={layout_styles.root_style}
            >
                <div className={layout_styles.content}>
                    <Container fluid>
                        {children}
                    </Container>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    whichIsRunning: state.conditions.which_is_running,
    faultRunning: state.conditions.fault_running
})

export default connect(mapStateToProps)(Layout);