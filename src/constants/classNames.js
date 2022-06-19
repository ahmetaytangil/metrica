export const general = {
    container_fluid: "container-fluid",
    row: "row"
}

export const topbarStyles = {
    root: "topbar",
    navbarCustom: "navbar-custom",
    topbarNav: "list-unstyled topbar-nav float-end mb-1",
    buttons: "button-items",
    dropdown: {
        toggle: {
            root_icon: "nav-link dropdown-toggle arrow-none nav-icon",
            root: "nav-link dropdown-toggle nav-user",
            inner: "d-flex align-items-center",
            arrow_small: "d-block font-11",
            arrow: "d-block fw-semibold font-12",
            arrow_icon: "fa-solid fa-angle-down",
            bell_icon: "fa-regular fa-bell",
            alert: "alert-badge"
        },
        head: "dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between" +
            " align-items-center",
        head_badge: "badge bg-soft-primary badge-pill",
        notification: "notification-menu",
        view_all: "text-center text-primary cursor-pointer"
    },
    dropdown_item: {
      root: "dropdown-item py-3 cursor-pointer",
      minute: "float-end text-muted ps-2",
      media: {
          root: "media",
          avatar: "avatar-md bg-soft-primary",
          body: "media-body align-self-center ms-2 text-truncate",
          text: "my-0 fw-normal text-dark",
          small: "text-muted mb-0"
      }
    }
}

export const layout_styles = {
    root: "page-wrapper",
    root_style: {backgroundColor: "rgb(236, 233, 233)"},
    content: "page-content-tab",
    page_title_box: "page-title-box",
    page_title: "page-title"
}
export const last_works = {
    root: "card",
    body: "card-body",
    title: "mt-0 mb-3 header-title",
    table: {
        root: "table-responsive browser_users",
        inner: "table mb-0",
        thead: "thead-light",
        thead_items: "border-top-0"
    }
}

export const card_styles = {
    root: {
        classNames: "card",
        styles: {maxWidth: "100%", backgroundColor: "rgb(179, 179, 179)"}
    },
    header: {
        row: "justify-content-center align-items-center",
        classNames: "card-header",
        styles: {backgroundColor: "rgb(179, 179, 179)", minHeight: 90}
    },
    title: {
        classNames: "card-title",
        styles: {fontSize: "30px", color: "black", paddingTop: '15px', paddingBottom: 10},
        styles_sec: {fontSize: "14px", color: "black", padding: "2px"}
    },
    body: {
        root: {
            classNames: "card-body",
            styles: {backgroundColor: "rgb(236, 233, 233)", border: "5px solid white"}
        },
        button_items: {
            classNames: "button-items",
            styles: {paddingBlock: "20px", backgroundColor: "transparent"}
        }
    },
    m_modal: {
        header: {backgroundColor: "rgb(179, 179, 179)"},
        title: {color: "black", fontSize: "18px", marginBottom: 0}
    }
}