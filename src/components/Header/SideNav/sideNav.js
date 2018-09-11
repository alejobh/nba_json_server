import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_items';

const SideNavigation = (props) => {
    return (
        <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            onOpenNav={props.onOpenNav}
            navStyle={{
                background: '#242424',
                maxWidth: '220px',
            }}
            >

            <SideNavItems />

        </SideNav>
    )
}

export default SideNavigation;
