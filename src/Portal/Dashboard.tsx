import React from 'react'
import Buttons from '../Component/Button'
import TableComponent from '../Component/Table'
import styled from 'styled-components'
import AddUsersModal from '../Component/Popup/AddGuest'
import { useState } from 'react'
import BoxComponent from '../Component/BoxWrapper'
import { useQuery } from '@apollo/client'

import { TGuest, TSummary } from '../Types/guest'
import { GUESTS, SUMMARY } from '../Graphql/user.graphql'
import { CircularProgress } from '@mui/material'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import moment from 'moment'

const Dashboard = () => {
  type TResGuest = {
    guests: TGuest[]
  }
  

  
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)
  

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const { data: dataTamu } = useQuery<TResGuest>(GUESTS)

  const document = new jsPDF()

  autoTable(document, {
    theme: 'grid',
    head: [['No', 'Nama', "Alamat", 'Nomor Telephone', 'Keperluan', 'Tanggal Kunjungan']],
    body: dataTamu?.guests?.map((val, idx) => {
      return [ String(idx + 1),
        val?.name,
        val?.address,
        val?.phoneNumber,
        val?.description,
        moment(val?.createdAt).locale("id").format("DD/MM/YYYY HH:mm:ss")]
    }),
    margin: { horizontal: 7 },
    styles: { overflow: "linebreak" },
    bodyStyles: { valign: "top" },
    startY: 25,
    didDrawPage: function (data) {
      // Header
      document.setFontSize(20);
      document.setTextColor(40);
      document.text("Daftar Kunjugan", data.settings.margin.left, 22);
  }})

  const Save = () => {
    document.save('Laporan Daftar Tamu.pdf')
  }

  

  const {data, error, loading, refetch} = useQuery<TSummary>(SUMMARY)

  console.log(data?.summary?.numberOfVisits);
  
  if(loading) return <LoadingWrapper> <CircularProgress /> </LoadingWrapper>

  return (
    <PageWrapper>
    <Wrapper>
      <BoxComponent label={"Kunjungan Bulan Ini"} value={data?.summary?.numberOfVisits?.month}/>
      <BoxComponent label={"Kunjungan Minggu Ini"} value={data?.summary?.numberOfVisits?.week} />
      <BoxComponent label={"Kunjungan Hari Ini"} value={data?.summary?.numberOfVisits?.day}/>
    </Wrapper>
    <ButtonDownload>
      <Buttons label='Unduh PDF' onClick={Save} />
    </ButtonDownload>
      <TableComponent/>
      <ButtonWrapper>
        <Buttons label='Tambah Tamu' onClick={openModal} />
      </ButtonWrapper>
      <AddUsersModal open={open} onClickClose={closeModal} />
    </PageWrapper>
  )
}

export default Dashboard;

const LoadingWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
width: 100%;
`

const ButtonDownload = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`
