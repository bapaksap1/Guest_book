import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import data from './data';
import moment from 'moment';

interface Column {
  id: 'id' | 'no' | 'nama' | 'nomorTelepon' | 'alamat' | 'keperluan' | "tanggal" | "aksi";
  label: string;
  minWidth?: number;
  align?: 'right';
  hidden?: boolean | false;
  
}

const columns: readonly Column[] = [
  { id: 'id', label: 'id', minWidth:0, hidden: true},
  { id: 'no', label: 'No', minWidth:10 },
  { id: 'nama', label: 'Nama', minWidth: 50 },
  {
    id: 'nomorTelepon',
    label: 'Nomor Telepon',
    minWidth: 10,

  },
  {
    id: 'alamat',
    label: 'Alamat',
    minWidth: 170,

  },
  {
    id: 'keperluan',
    label: 'Keperluan',
    minWidth: 170,
    
  },
  { id: 'tanggal', label: 'Tanggal Kunjungan', minWidth: 100 },
  { id: 'aksi', label: 'Aksi', minWidth: 100 },
];

interface Data {
  id: string;
  no: string;
  nama: string;
  alamat: string
  nomorTelepon: string;
  keperluan: string;
  tanggal: string;
  aksi: any;
}

function createData(
  id: string,
  no: string,
  nama: string,
  alamat: string,
  nomorTelepon: string,
  keperluan: string,
  tanggal: string,
  aksi: any
): Data {
  return { id, no, nama, nomorTelepon,  alamat, keperluan, tanggal, aksi };
}




const rows = data?.map((val, idx) =>  {
  return createData(
    val?.id,
    String(idx + 1),
    val?.nama,
    val?.alamat,
    val?.nomorTelepon,
    val?.keperluan,
    moment(val?.tanggal).locale("id").format("DD/MM/YYYY HH:mm:ss"),
    "aksi"
  )});

export default function TableComponent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: "60vh",   }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => column.hidden !== true && ( 
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) =>  {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => column.hidden !== true &&   (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id]}
                        </TableCell>
                      ))}
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
