import { CarOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState, useContext } from 'react';
import { supabase } from "./supabase/client";
import { NavLink } from 'react-router-dom';
import AppContext from './App'


const items = [
  {
    label: (
      <NavLink to="/">
        Home
      </NavLink>
    ),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <NavLink to="/drivers">
        Drivers
      </NavLink>
    ),
    key: 'drivers',
    icon: <CarOutlined />,
  },
  {
    label: 'Sign Out',
    key: 'signout',
    icon: <SettingOutlined />,

  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },

];

const App = ({nav_key }) => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    if (e.key === 'signout') {
      console.log('signout');
      supabase.auth.signOut();
      return;
    }

    setCurrent(e.key);
  };
  return <Menu className='navbar-fixed-top' onClick={onClick} selectedKeys={[nav_key]} mode="horizontal" items={items} />;
};
export default App;