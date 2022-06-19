import {topbarStyles} from "../../../../constants/classNames";


const TopbarNav = ({children}) => {
    return (
        <ul className={topbarStyles.topbarNav}>
            {children}
        </ul>
    );
};

export default TopbarNav;