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
import { TForm } from '../../Types/guest'
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
        <Title>Selamat Datang <br/> di Polsek Gondomanan</Title>
        <SubTitle>Silahkan Isi Buku Tamu Terlebih Dahulu</SubTitle>
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
  background-color: #d8cfcf;
  
`
const FieldWrapper = styled.div`
  width: 40%;
  margin-left: 30%;
  padding-bottom: 60px;
  background-color: white; 
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 4px 4px 4px 4px grey;

  `

const Title = styled.p`
  font-size:30px;
  text-align: center;
  margin: 0px;
  padding-top: 30px;
  font-weight: bold;
`
const SubTitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 0px;

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
