import Topbar from "../../UI/organisms/topbar";
import {layout_styles} from "../../../constants/class_names";
import {Col, Container, Row} from "react-bootstrap";

const Layout = ({children, title}) => {
    return (
        <>
         <Topbar />
         <div className={layout_styles.root} style={layout_styles.root_style}>
             <div className={layout_styles.content}>
                 <Container fluid>
                     <Row>
                         <Col sm={12}>
                             <div className={layout_styles.page_title_box}>
                                 <h4 className={layout_styles.page_title}>
                                     {title}
                                 </h4>
                             </div>
                         </Col>
                     </Row>
                     {children}
                 </Container>
             </div>
         </div>
        </>
    );
};

export default Layout;