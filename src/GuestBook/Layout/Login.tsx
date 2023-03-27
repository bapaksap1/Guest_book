import React, { useEffect } from 'react'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import styled, { keyframes } from 'styled-components'
import InputText from '../../Component/Input/InputText'
import InputTextArea from '../../Component/Input/InputTextArea'
import Button from '@mui/material/Button';
import * as yup from "yup"
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TForm, TFormLogin, TMutationAddGuest } from '../../Types/guest'
import Buttons from '../../Component/Button'
import { useMutation } from '@apollo/client'
import { Grid } from '@mui/material'
import { LOGIN } from '../../Graphql/auth.graphql'
import ModalComponent from '../../Component/Modal'
import crypto from 'crypto'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  type TLoginMutaion = {
    token: string;
    login: {
      message: string;
      user: { fullName: string; role: string; username: string };
    }
  }
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY as string

  const encryptRSA = (text: string) => {
    const encrypted = crypto.publicEncrypt(
      {
        key: PUBLIC_KEY,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(text, "utf8")
    );
    return encrypted.toString("base64");
  }

  useEffect(() => {
    sessionStorage.removeItem("token")
  }, [])

 

  const { handleSubmit, watch, control, formState, setValue, reset } = useForm<TFormLogin>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues
  });
  const { isValid } = formState;

  const [login, { data, error, loading }] = useMutation<TLoginMutaion>(LOGIN, {
    errorPolicy: "all",
    fetchPolicy: 'network-only'
  })

  React.useEffect(() => {
    if (data?.token) {
      sessionStorage.setItem("token", data?.token)
      enqueueSnackbar(data?.login.message, { variant: "success", anchorOrigin: { vertical: "bottom", horizontal: "left" }, autoHideDuration: 3000 })
      navigate('/portal')
    } 
    else if (error){
   
        enqueueSnackbar( "Something went wrong", { variant: "error", anchorOrigin: { vertical: "bottom", horizontal: "left" }, autoHideDuration: 5000 })
      
    }
   
  }, [data])

 


  const onSubmit = async (values: TFormLogin) => {
    try {
      await login({
        variables: {
          username: values.username,
          password: encryptRSA(values.password)
        }
      });
    
    } catch (error) {
      
    }
  }

  return (
    <Wrapper>
      <Grid style={{ minHeight: '100vh', width: "100%", display: 'flex', flexDirection: "column", backgroundColor: "grey", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldWrapper>
            <Title>Login Admin</Title>
            <SubTitle>Buku Tamu Polsek Gondokusuman</SubTitle>
            <InputWrapper>
              <Controller
                name="username"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <InputText label='Username' id='username' type='text' value={value} onChange={onChange} error={!!error} />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <InputText label='Password' id='password' type='password' value={value} onChange={onChange} error={!!error} />
                )}
              />
            </InputWrapper>
            <ButtonWrapper>
              <Buttons variant="contained" label='Login' color='inherit' disabled={!isValid || loading} type='submit' />
            </ButtonWrapper>
          </FieldWrapper>
        </form>
      </Grid>
    </Wrapper>
  )
}

export default Login

const validationSchema =
  yup.object({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

const defaultValues = {
  username: "",
  password: "",
};


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  
  box-sizing: border-box;
 

`

const Animation = keyframes`
  from {left: 0px;}
  to {left: 300px;}
`

const FieldWrapper = styled.div`
  width: 40%;
  margin-left: 30%;
  padding-bottom: 60px;
  background-color: white; 
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 4px 4px 4px 4px grey;
  max-height: 100vh;
  /* animation-name: ${Animation};
  animation: 5s infinite; */
  box-sizing: border-box;
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
  box-sizing: border-box;
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


