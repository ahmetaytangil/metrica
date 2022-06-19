import {topbarStyles} from "../../../../constants/classNames";

const {
    dropdown_item: {
        root,
        minute: minuteStyle,
        media: mediaStyle
    }
} = topbarStyles;

const DropdownItem = (
    {
        icon,
        text,
        media,
        minute = null,
        small_text
    }
) => {
    return (
        <span className={root}>
            {minute &&
                <small className={minuteStyle}>
                    {minute}
                </small>
            }
            {media ?
                <div className={mediaStyle.root}>
                    <div className={mediaStyle.avatar}>
                        <i className={icon}>{/*icon*/}</i>
                    </div>
                    <div
                        className={mediaStyle.body}>
                        <h6 className={mediaStyle.text}>
                            {text}
                        </h6>
                        <small className={mediaStyle.small}>
                            {small_text}
                        </small>
                    </div>
                </div>
                :
                <>
                    <i className={icon}>{/*icon*/}</i> {text}
                </>
            }

        </span>
    );
};

export default DropdownItem;