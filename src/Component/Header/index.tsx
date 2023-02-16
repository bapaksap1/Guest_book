import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


import logo from '../../Lambang_Polda_DIY.png' 

import Toolbar from '@mui/material/Toolbar';

import styled from 'styled-components'


const Header = () => {

  return (
    <Box>
      <AppBar sx={{position: "relative"}} >
        <Wrapper>
          <ImageWrapper >
            <img src={logo} alt="logo" />
            <p> Kepolisian Daerah<br/>Daerah istimewa Yogyakarta</p>
          </ImageWrapper>
          
        </Wrapper>
      </AppBar>

    </Box>
  );
}

export default Header

const Wrapper = styled(Toolbar)`
  background-color: white;
 
`
const ImageWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  
  background-color: white;
  padding: 5px 5px ;
  > img {
  width: 5%;
  height: 5%;
  }
  > p {
    color: black;
    font-family: "poppins";
  }
`