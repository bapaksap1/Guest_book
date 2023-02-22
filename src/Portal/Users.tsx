import React from 'react'
import Buttons from '../Component/Button'
import TableComponent from '../Component/Table'
import styled from 'styled-components'
import AddUsersModal from '../Component/Popup/AddUser'
import { useState } from 'react'
import BoxComponent from '../Component/BoxWrapper'

const Users = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const value = 1;

  return (
    <PageWrapper>
    <Wrapper>
      <BoxComponent label={"Kunjungan Bulan Ini"} value={value}/>
      <BoxComponent label={"Kunjungan Minggu Ini"} value={value} />
      <BoxComponent label={"Kunjungan Hari Ini"} value={value}/>
    </Wrapper>
      
      <TableComponent/>
      <ButtonWrapper>
        <Buttons label='Tambah Tamu' onClick={openModal} />
      </ButtonWrapper>
      <AddUsersModal open={open} onClickClose={closeModal}/>
    </PageWrapper>
  )
}

export default Users;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  width: 100%;
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
width: 100%,
`

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

`
