import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PortalComponent from '../../Component/Portal/Sidebar';

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
    <PortalComponent />
  )
}

export default Portal;
