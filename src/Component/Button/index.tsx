
import {Button, ButtonProps } from '@mui/material';

type TButton = {
  label?: string
}

const Buttons: React.FC<ButtonProps & TButton> = (props) => {
  return (
      <Button {...props}>{props.label} </Button>
  );
}

export default Buttons

Buttons.defaultProps = {
  variant: "contained",
  type: "button",
  
  onClick: () => { },
  disabled: false,
  label: "Button",
  color: "primary"
}