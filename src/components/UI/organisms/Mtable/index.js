import {Col, Row} from "react-bootstrap";
import {makeId} from "../../../../utils/helpers";
import {last_works} from "../../../../constants/classNames";

const Mtable = ({title, heads, bodies}) => {
    return (
        <Row>
            <Col xs={12} style={{paddingInline: "10%"}}>
                <div className={last_works.root}>
                    <div className={last_works.body}>
                        <h4 className={last_works.title}>
                            {title}
                        </h4>
                        <div className={last_works.body}>
                            <div className={last_works.table.root}>
                                <table className={last_works.table.inner}>
                                    <thead className={last_works.table.thead}>
                                        <tr>
                                            {heads.map(head => (
                                                <th
                                                    key={makeId()}
                                                    className={last_works.table.thead_items}
                                                >
                                                    {head.text}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bodies.map(body => (
                                            <tr key={makeId()}>
                                                {body.items.map(item => (
                                                    <td key={makeId()}>
                                                        {item.text}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Mtable;