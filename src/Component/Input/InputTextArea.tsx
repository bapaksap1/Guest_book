import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

type TInputArea =
{
  id: string;
  label: string;
}

const InputTextArea:React.FC<TInputArea> = (props) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
      fullWidth
      id={props.id}
        label={props.label}
          multiline
          rows={5}
          />
    </Box>
  );
}


export default InputTextArea;

const Input = styled(TextField)`
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
 
`