import { StyledBtnUniversal } from "./styled";

interface BtnUniversalType {
  onClick: () => void;
  label?: string;
  bgColor: string;
}

function BtnUniversal(props: BtnUniversalType) {
  const { onClick, label, bgColor } = props;

  return (
    <StyledBtnUniversal $bgColor={bgColor} onClick={onClick} variant="primary">
      <div>{label}</div>
    </StyledBtnUniversal>
  );
}

export default BtnUniversal;
