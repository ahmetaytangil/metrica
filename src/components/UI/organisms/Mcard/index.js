import React from 'react';
import {card_styles} from "../../../../constants/class_names";
import {Col, Row} from "react-bootstrap";
import {convertMsToTime, makeId} from "../../../../utils/helpers";

const {
    root,
    header,
    title,
    body
} = card_styles

const Mcard = ({headers, children, clock, time, name}) => {
    console.log(name, " ", time)
    return (
        <div className={root.classNames} style={root.styles}>
            {headers.map(head => (
                <div
                    key={makeId()}
                    className={
                        `
                        ${header.classNames} 
                        ${(time !== 0 && name === "01") && "bg-orange"}
                        ${(time !== 0 && name === "02") && "bg-green"}
                        ${(time !== 0 && name === "03") && "bg-red"}
                        `
                    }
                    style={header.styles}
                >
                    {head.head &&
                        <h4 className={title.classNames} style={title.styles}>
                            {head.head}
                        </h4>
                    }
                    <Row className={header.row}>
                        {head.items?.map(item => (
                            <Col key={makeId()} md={head.items?.length === 4 ? 3 : ""}>
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
                        <i className="fa-solid fa-clock me-2">{/*icon*/}</i>
                        {convertMsToTime(time)}
                    </h4>
                }
            </div>
        </div>
    );
};

export default Mcard;