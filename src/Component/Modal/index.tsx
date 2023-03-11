import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

type TModal = {
  open: boolean;
  title: string;
  logo: string;
  message: string;
  close: () => void;
}

const ModalComponent: React.FC<TModal> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const logo = `${process.env.PUBLIC_URL + props.logo }  `
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.close}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Wrapper>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {props.title}
            </Typography>
            <Box>
              <img className='lolo' src={logo} alt='logo' />
            </Box>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.message}
            </Typography>
            </Wrapper>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalComponent

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  img.lolo {
    width: 130px;

    margin-top: 10px;
  }
`
