import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import TemplatePDF from "./TemplatePDF";
import autoTable from 'jspdf-autotable'
import { useQuery } from "@apollo/client";
import { GUESTS } from "../Graphql/user.graphql";
import { TGuest } from "../Types/guest";
import moment from "moment";


const GeneratePDF: React.FC = () => {
  const certificateTemplateRef = useRef<any>(null);

type TResGuest = {
  guests: TGuest[]
}

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts
    doc.setFont("Anton-Regular", "normal");

    doc.html(certificateTemplateRef.current, {
      async callback(doc) {
        // save the document as a PDF with name of Memes
        doc.save("Memes");
      }
    });
  };

  const { data, error, loading, refetch } = useQuery<TResGuest>(GUESTS)

  const dataTable = data?.guests.map((val, idx) => {
    return Dataa(
    String(idx + 1),
    val?.name,
    val?.address,
    val?.phoneNumber,
    val?.description,
    moment(val?.createdAt).locale("id").format("DD/MM/YYYY HH:mm:ss")
    )
    

  })

  interface Data {
    no: string;
    nama: string;
    alamat: string
    nomorTelepon: string;
    keperluan: string;
    tanggal: string;
  }

  function Dataa( 
    no: string,
    nama: string,
    alamat: string,
    nomorTelepon: string,
    keperluan: string,
    tanggal: string,
  ): Data {
    return { no, nama, nomorTelepon,  alamat, keperluan, tanggal };
  }

  const rows: any = data?.guests?.map((val, idx) =>  {

    return Dataa(
      String(idx + 1),
      val?.name,
      val?.address,
      val?.phoneNumber,
      val?.description,
      moment(val?.createdAt).locale("id").format("DD/MM/YYYY HH:mm:ss"),
    )}, [data]);

  const document = new jsPDF()
  const a = rows
  console.log(rows);
  

// It can parse html:
// <table id="my-table"><!-- ... --></table>
  autoTable(document, { html: '#my-table' },)

  // Or use javascript directly:
  autoTable(document, {
    theme: "plain",
    head: [['No', 'Nama', "Alamat", 'Nomor Telephone', 'Keperluan', 'Tanggal Kunjungan']],
    body: data?.guests?.map((val, idx) => {
      return [ String(idx + 1),
        val?.name,
        val?.address,
        val?.phoneNumber,
        val?.description,
        moment(val?.createdAt).locale("id").format("DD/MM/YYYY HH:mm:ss")]
    }),
  })
  const Save = () => {
    document.save('table.pdf')
  }
 

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <button
        style={{
          margin: "50px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          fontFamily: "Anton",
          fontSize: "1.2rem",
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
          cursor: "pointer",
          width: "200px"
        }}
        onClick={Save}
      >
        Generate Pdf
      </button>
      <div ref={certificateTemplateRef}>
        <TemplatePDF />
      </div>
    </div>
  );
};

export default GeneratePDF;


