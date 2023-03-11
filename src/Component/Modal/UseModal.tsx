import React from 'react'
import ModalComponent from '.'

type TModal = {
  open: boolean;
  onClose: () => void;
}

export const ModalSuccessGuest: React.FC<TModal> = (props) => {
  return (
    <ModalComponent logo='Success.svg' title='Pendaftaran Berhasil' message='Data Anda Akan Segera Diproses'
    open={props.open} close={props.onClose} />
  )
}

export const ModalFailedGuest: React.FC<TModal> = (props) => {
  return (
    <ModalComponent logo='Failed.svg' title='Pendaftaran Gagal' message='Silahkan Menghubungi Admin'
    open={props.open} close={props.onClose} />
  )
}

export const ModalSuccessAdmin: React.FC<TModal> = (props) => {
  return (
    <ModalComponent logo='Success.svg' title='Pendaftaran Berhasil' message=''
    open={props.open} close={props.onClose} />
  )
}

export const ModalSuccessDelete: React.FC<TModal> = (props) => {
  return (
    <ModalComponent logo='Success.svg' title='Hapus Berhasil' message=''
    open={props.open} close={props.onClose} />
  )
}

export const ModalSuccessUpdate: React.FC<TModal> = (props) => {
  return (
    <ModalComponent logo='Success.svg' title='Update Berhasil' message=''
    open={props.open} close={props.onClose} />
  )
}


export const ModalFailedAdmin: React.FC<TModal> = (props) => {
  return (
    <ModalComponent logo='Failed.svg' title='Pendaftaran Gagal' message='Silahkan Coba Beberapa Saat Lagi'
    open={props.open} close={props.onClose} />
  )
}
