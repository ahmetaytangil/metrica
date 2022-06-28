import {topbarStyles} from "../../../../constants/class_names";


const TopbarNav = ({children}) => {
    return (
        <ul className={topbarStyles.topbarNav}>
            {children}
        </ul>
    );
};

export default TopbarNav;