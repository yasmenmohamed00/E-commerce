import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './SideMenu.css';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { fetchcatogries } from '../../utils/slice/getCatogries';
import { AppDispatch, store, useAppSelector } from '../../utils/store';

interface MenuItem {
  name: string;
  products?: string[];
  id: string;
  subItems:string[];
  icon:string
}



const SideMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | MenuItem>('');
  const [activeSubMenu, setActiveSubMenu] = useState<string | MenuItem>('');
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useAppSelector(state => state.catogries);
  let menuItems: MenuItem[] = [];

  menuItems = data;

  useEffect(() => {
    dispatch(fetchcatogries());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  const handleMouseEnter = (name: string, subItem?: string | MenuItem) => {
    if (subItem) {
      setActiveSubMenu(subItem);
    } else {
      setActiveItem(name);
    }
  };

  const handleMouseLeave = () => {
    if (activeSubMenu === '') {
      setActiveItem('');
    }
  };
  const handleMouseLeaveMenu = () => {
      setActiveItem('');
      setActiveSubMenu('');
  };

  return (
    <div className="side-menu" onMouseLeave={handleMouseLeaveMenu}>
      <h6>My markets</h6>
      {menuItems.map((menuItem) => (
        <div className='mb-2'>
          <div
            className={`d-flex align-items-baseline menu-item justify-content-between p-2 ${activeItem === menuItem.name ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(menuItem.name)}
          >
            <div className='d-flex align-items-center'>
              <div className='menu-item-icon'><img src={menuItem.icon} alt="" /></div>
              <p className='mx-2 mb-0'>{menuItem.name}</p></div>
              <FontAwesomeIcon icon={faChevronRight} />
          </div>
          {menuItem && activeItem === menuItem.name && (
            <div className="sub-menu shadow-sm">
              {menuItem.subItems.map((subItem) => (
                <div 
                  className={`sub-menu-item ${activeSubMenu === subItem  ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(menuItem.name, subItem)}
                  onMouseLeave={handleMouseLeave}
                >
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;