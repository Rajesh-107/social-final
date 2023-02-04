import { CalendarDaysIcon, ChevronDownIcon, ComputerDesktopIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React from 'react';
import SidebarRow from './SidebarRow';

const Sidebar = () => {

    // const [session, loading] = useSession();

    return (
        <div className=' p-2 mt-5'>
            {/* <SidebarRow src={session.user.image} title={session?.user?.name} /> */}

            <SidebarRow Icon={UsersIcon} title='Friends'/>
            <SidebarRow Icon={UserGroupIcon} title='Groups'/>
            <SidebarRow Icon={ShoppingBagIcon} title='Shopping'/>
            <SidebarRow Icon={ComputerDesktopIcon} title='Watch'/>
            <SidebarRow Icon={CalendarDaysIcon} title='Events'/>
            <SidebarRow Icon={ChevronDownIcon} title='See More'/>
        </div>
    );
};

export default Sidebar;