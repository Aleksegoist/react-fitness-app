import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <Typography variant='h5' mb='40px' mt='20px'>
          © 2022 AYDev. All Rights Reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
