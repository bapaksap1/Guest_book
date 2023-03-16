import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PortalComponent from '../../Component/Portal/Sidebar';
import styled from 'styled-components';

const Portal = () => {
  const navigate = useNavigate()

  useEffect(() =>{
    if(!sessionStorage.getItem("token")){
      navigate('/portal/login')
    }
    else 
    navigate('/portal')
  }, [])

  return (
    <Wrapper>
    <PortalComponent />
    </Wrapper>
  )
}

export default Portal;

const Wrapper = styled.div`
  box-sizing: border-box;
`
