import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IconContext } from 'react-icons';
import { IoMdHome } from 'react-icons/io'; //Homeアイコン
import { MdAccountCircle } from 'react-icons/md'; //Accountアイコン
import { IoSearch } from 'react-icons/io5'; //Searchアイコン
import { RiMapPin2Line } from 'react-icons/ri'; //国名アイコン

const Header = () => {
  return (
    <header className="px-5 pt-5">
      <div className="container flex mx-auto flex-row h-16 shadow-2xl rounded-full">
        <img src={logo} alt="ロゴの名前" className="object-contain pl-6 py-2" />
        <div className="ml-auto flex" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <IconContext.Provider value={{ color: '#000000', size: '32' }}>
            <Link
              to={'/'}
              className="mr-8"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IoMdHome />
              <span style={{ marginTop: '4px' }}>HOME</span>
            </Link>
            <Link
              to={'/Account'}
              className="mr-8"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <MdAccountCircle />
              <span style={{ marginTop: '4px' }}>Account</span>
            </Link>
            <Link
              to={'/Search'}
              className="mr-8"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IoSearch />
              <span style={{ marginTop: '4px' }}>Search</span>
            </Link>
            <Link
              to={'/result'}
              className="mr-8"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <RiMapPin2Line />
              <span style={{ marginTop: '4px' }}>国名</span>
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
};

export default Header;
