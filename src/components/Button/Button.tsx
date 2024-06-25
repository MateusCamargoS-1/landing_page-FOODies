import ButtonStyled from "./ButtonStyled";

interface ButtonStyledProps {
    label: string;
}

const Button = ({label}: ButtonStyledProps) => {
   return (
    <ButtonStyled>{label}</ButtonStyled>
   ); 
}

export default Button;