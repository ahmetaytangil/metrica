import React from 'react';
import {card_styles} from "../../../../constants/class_names";
import {Col, Row} from "react-bootstrap";
import {colorCond, convertMsToTime, makeId} from "../../../../utils/helpers";
import {connect} from "react-redux";

const {
    root,
    header,
    title,
    body
} = card_styles

const Mcard = (
    {
        headers,
        children,
        clock,
        time,
        whichIsRunning
    }
) => {
    return (
        <div className={root.classNames} style={root.styles}>
            {headers.map((head, index) => {
                return (
                    <div
                        key={makeId()}
                        className={
                            header.classNames + colorCond(whichIsRunning, index === 0 && true)
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
                )
            })}
            <div
                className={body.root.classNames + colorCond(whichIsRunning)}
                style={body.root.styles}
            >
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

const mapStateToProps = (state) => ({
    whichIsRunning: state.conditions.which_is_running
})

export default connect(mapStateToProps)(Mcard);