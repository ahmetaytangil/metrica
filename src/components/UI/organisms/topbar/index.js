import React from 'react';
import TopbarNav from "./topbar_nav";
import TopbarButtons from "../../molecules/topbar_buttons";
import DropdownLists from "../../molecules/dropdown_lists";
import DropdownItem from "../../atoms/dropdown_item";
import {topbarStyles} from "../../../../constants/classNames";


const TopBar = () => {
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
                        arrow_small_text="Bilgi İşlem"
                        arrow_text="Buse Yapıcı"
                        dropdown={
                            <DropdownItem
                                icon="fa-solid fa-power-off"
                                text="Logout"
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

export default TopBar;