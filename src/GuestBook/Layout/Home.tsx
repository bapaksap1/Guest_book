import React from 'react'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import styled from 'styled-components'
import InputText from '../../Component/Input/InputText'
import InputTextArea from '../../Component/Input/InputTextArea'
import Button from '@mui/material/Button';


const Home= () => {
  return (
    <Wrapper>
      <Header />
      <FieldWrapper>
        <Title>Selamat Datang di Polsek Gondomanan<br/>Silahkan Isi Buku Tamu Terlebih Dahulu</Title>
        <InputWrapper>
            <InputText label='Nama Lengkap' id='nama' type='text'/>
            <InputText label='Nomor Telepon' id='no_hp' type='number'/>
            <InputTextArea id='alamat' label='Alamat'/>
            <InputTextArea id='keperluan' label='Keperluan'/>
          
        </InputWrapper> 
        <ButtonWrapper>
            <Button variant="contained">Submit</Button>
          </ButtonWrapper>
        </FieldWrapper>
      <Footer />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e9e9e9;

  
`
const FieldWrapper = styled.div`
  width: 50%;
  margin-left: 25%;
  height: 100%;
  background-color: white;

  `

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 0px;
  padding-top: 20px;
`

const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`
const ButtonWrapper = styled.div`
`
