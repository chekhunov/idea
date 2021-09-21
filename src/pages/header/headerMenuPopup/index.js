import React from 'react';
import Menu from '../../../components/menu';
import ContactsAddress from '../../../components/contactsAddress';

export default function HeaderMenuPopup({ activePopup, menuItems, activeId, setActiveId, generalInfo, services, isActivePopup }) {

  return (
    <>
    {activePopup && <div className="menu-mobile">
      <div className="menu-mobile__inner">
        <Menu activePopup={activePopup} menuItems={menuItems} activeId={activeId} setActiveId={setActiveId} services={services} isActivePopup={isActivePopup} />
         <ContactsAddress generalInfo={generalInfo} />
      </div>
    </div>}
    </>
  );
}
