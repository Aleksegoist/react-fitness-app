import React from 'react';
import Logo from '../assets/images/Logo_new.png';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: '122px', xs: '5px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px='8px'
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: '55px', height: '55px', margin: '0 20px' }}
        />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid red',
          }}
        >
          Home
        </Link>
        <a
          href='#exercises'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
