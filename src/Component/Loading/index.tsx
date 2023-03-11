import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
`
