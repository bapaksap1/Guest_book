import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box';
import InputText from '../../Component/Input/InputText'
import InputTextArea from '../../Component/Input/InputTextArea'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import Buttons from '../Button';
import * as yup from "yup"
import { Controller, useForm } from 'react-hook-form'
import { TForm } from '../../Types/users';


type TModal = {
  open: boolean;
  onClickClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddUsersModal: React.FC<TModal> = ({open, onClickClose}) => {


  React.useEffect(() => {
    if (open) {
      reset()
    }
  }, [open])


  const { handleSubmit, watch, control, formState, setValue, reset } = useForm<TForm>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues
  });
  const { isValid } = formState;

  const onSubmit = (values: TForm) => {
    console.log("submit berhasil");
    console.log(values);
    onClickClose()
    
  }


  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tambah Tamu
          </Typography>
          <InputWrapper>
          <Controller
            name="name"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputText label='Nama Lengkap' id='name' type='text' value={value} onChange={onChange} error={!!error}/>
            )}
           />
           <Controller
            name="phoneNumber"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputText label='Nomor Telepon' id='phoneNumber' type='number' value={value} onChange={onChange} error={!!error}/>
            )}
           />
           <Controller
            name="address"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputTextArea id='address' label='Alamat' value={value} onChange={onChange} error={!!error}/>
            )}
           />
           <Controller
            name="description"
            control={control}
            render={({field: {onChange, value}, fieldState: {error} }) => (
              <InputTextArea id='description' label='Keperluan' value={value} onChange={onChange} error={!!error}/>
            )}
           />
        </InputWrapper> 
        <ButtonWrapper>
            <Buttons label='Tambah' type='submit' disabled={!isValid}/>
            <Buttons label='Batal' onClick={onClickClose}/>
          </ButtonWrapper>
        </Box>
      </form>
      </Modal>
    </div>
  );
}

export default AddUsersModal;

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

const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const ButtonWrapper = styled.div`
margin-top: 10px;
display: flex;
flex-direction: row;
gap: 10px;
`