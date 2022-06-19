import {Dropdown} from "react-bootstrap";
import {forwardRef} from "react";
import {topbarStyles} from "../../../constants/classNames";

const {
    dropdown: {toggle, head, head_badge, notification, view_all}
} = topbarStyles;

const CustomToggle = forwardRef(
    (
        {
            children,
            onClick,
            classNames
        },
        ref
    ) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className={classNames}
        >
            {children}
        </a>
    )
);

const DropdownLists = (
    {
        with_arrow = false,
        with_button = false,
        dropdown_head = null,
        dropdown_head_small = null,
        dropdown = null,
        arrow_small_text = null,
        arrow_text
    }
) => {
    return (
        <Dropdown style={{marginRight: 10}}>
            {with_arrow &&
                <Dropdown.Toggle as={CustomToggle} classNames={toggle.root}>
                    <div className={toggle.inner}>
                        <div>
                            <small className={toggle.arrow_small}>
                                {arrow_small_text}
                            </small>
                            <span className={toggle.arrow}>
                                {arrow_text}
                                <i className={toggle.arrow_icon}>{/**/}</i>
                            </span>
                        </div>
                    </div>
                </Dropdown.Toggle>
            }
            {with_button &&
                <Dropdown.Toggle as={CustomToggle} classNames={toggle.root_icon}>
                    <i className={toggle.bell_icon}>{/**/}</i>
                    <span className={toggle.alert}>{/**/}</span>
                </Dropdown.Toggle>
            }
            <Dropdown.Menu align={'end'}>
                {with_button ?
                    <>
                        <h6 className={head}>
                            {dropdown_head}
                            <span className={head_badge}>
                                {dropdown_head_small}
                            </span>
                        </h6>
                        <div className={notification}>
                            {dropdown}
                        </div>
                        <div className={view_all}>
                            View all
                        </div>
                    </>
                    :
                    dropdown
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownLists;