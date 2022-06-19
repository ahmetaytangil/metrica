import React from 'react';
import {card_styles} from "../../../../constants/classNames";
import {Col, Row} from "react-bootstrap";

const {
    root,
    header,
    title,
    body
} = card_styles

const Mcard = ({headers, children, clock}) => {
    return (
        <div className={root.classNames} style={root.styles}>
            {headers.map(head => (
                <div className={header.classNames} style={header.styles}>
                    {head.head &&
                        <h4 className={title.classNames} style={title.styles}>
                            {head.head}
                        </h4>
                    }
                    <Row className={header.row}>
                        {head.items?.map(item => (
                            <Col md={head.items?.length === 4 ? 3 : ""}>
                                <h4
                                    className={title.classNames}
                                    style={title.styles_sec}
                                >
                                    {item.title}
                                </h4>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
            <div className={body.root.classNames} style={body.root.styles}>
                <div className={body.button_items.classNames} style={body.button_items.styles}>
                    {children}
                </div>
                {clock !== "none" &&
                    <h4 className="mdi mdi-clock-outline">
                        <i className="fa-solid fa-clock"></i>
                        <span className="ms-3">00:00:00</span>
                    </h4>
                }
            </div>
        </div>
    );
};

export default Mcard;