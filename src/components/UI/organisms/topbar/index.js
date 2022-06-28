import React from 'react';
import TopbarNav from "./topbar_nav";
import TopbarButtons from "../../molecules/topbar_buttons";
import DropdownLists from "../../molecules/dropdown_lists";
import DropdownItem from "../../atoms/dropdown_item";
import {topbarStyles} from "../../../../constants/class_names";
import {connect} from "react-redux";
import {storeUser} from "../../../../store/auth/auth.slice";
import {storageNames} from "../../../../constants/storage_names";


const TopBar = ({user, storeUserDis}) => {
    console.log(user)

    const handleLogOut = () => {
        storeUserDis();
        localStorage.removeItem(storageNames.user);
    }

    return (
        <div className={topbarStyles.root}>
            <nav className={topbarStyles.navbarCustom}>
                <TopbarNav>
                    <DropdownLists
                        with_button
                        dropdown_head="Notifications"
                        dropdown_head_small="2"
                        dropdown={
                            <>
                                <DropdownItem
                                    media
                                    text="Your order is placed"
                                    small_text="Dummy text of the printing and industry."
                                    minute="2 min ago"
                                    icon="fa-solid fa-chart-pie"
                                />
                                <DropdownItem
                                    media
                                    text="Your order is placed"
                                    small_text="Dummy text of the printing and industry."
                                    minute="2 min ago"
                                    icon="fa-solid fa-camera"
                                />
                                <DropdownItem
                                    media
                                    text="Your order is placed"
                                    small_text="Dummy text of the printing and industry."
                                    minute="2 min ago"
                                    icon="fa-solid fa-user"
                                />
                                <DropdownItem
                                    media
                                    text="Your order is placed"
                                    small_text="Dummy text of the printing and industry."
                                    minute="2 min ago"
                                    icon="fa-solid fa-chart-pie"
                                />
                                <DropdownItem
                                    media
                                    text="Your order is placed"
                                    small_text="Dummy text of the printing and industry."
                                    minute="2 min ago"
                                    icon="fa-solid fa-camera"
                                />
                                <DropdownItem
                                    media
                                    text="Your order is placed"
                                    small_text="Dummy text of the printing and industry."
                                    minute="2 min ago"
                                    icon="fa-solid fa-user"
                                />
                            </>
                        }
                    />
                    <DropdownLists
                        with_arrow
                        arrow_small_text={user?.section}
                        arrow_text={user?.name_surname}
                        dropdown={
                            <DropdownItem
                                icon="fa-solid fa-power-off"
                                text="Logout"
                                onClick={handleLogOut}
                            />
                        }
                    />
                </TopbarNav>
                <TopbarNav>
                    <TopbarButtons/>
                </TopbarNav>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
    storeUserDis: () => dispatch(storeUser(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
