import React from 'react'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import styled from 'styled-components'
import InputText from '../../Component/Input/InputText'
import InputTextArea from '../../Component/Input/InputTextArea'
import Button from '@mui/material/Button';
import * as yup from "yup"
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TForm } from '../../Types/users'
import Buttons from '../../Component/Button'


const Home= () => {

  const { handleSubmit, watch, control, formState, setValue, reset } = useForm<TForm>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues
  });
  const { isValid } = formState;
  return (
    <Wrapper>
      <Header />
      <FieldWrapper>
        <Title>Selamat Datang di Polsek Gondomanan<br/>Silahkan Isi Buku Tamu Terlebih Dahulu</Title>
        <InputWrapper>
        <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputText label='Nama Lengkap' id='name' type='text' value={value} onChange={onChange} error={!!error}/>
            )}
           />
           <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputText label='Nomor Telepon' id='phoneNumber' type='number' value={value} onChange={onChange} error={!!error}/>
            )}
           />
           <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputTextArea id='address' label='Alamat' value={value} onChange={onChange} error={!!error}/>
            )}
           />
           <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputTextArea id='description' label='Keperluan' value={value} onChange={onChange} error={!!error}/>
            )}
           />
          
        </InputWrapper> 
        <ButtonWrapper>
            <Buttons variant="contained" label='Submit'/>
          </ButtonWrapper>
        </FieldWrapper>
      <Footer />
    </Wrapper>
  )
}

export default Home

const validationSchema =
  yup.object({
    name: yup.string().required("Required"),
    phoneNumber: yup.string().required("Required"),
    address: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });

  const defaultValues = {
    name: "",
    phoneNumber: "",
    address: "",
    description: "",
  };


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
  padding-top: 60px;
`

const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  > Button {
    width: 500px;
  }
`
