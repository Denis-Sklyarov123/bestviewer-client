import { StyledBtnUniversal } from "./styled";

interface BtnUniversalType {
  onClick: () => void;
  label?: string;
}

function BtnUniversal(props: BtnUniversalType) {
  const { onClick, label } = props;

  return (
    <StyledBtnUniversal onClick={onClick} variant="primary">
      <div>{label}</div>
    </StyledBtnUniversal>
  );
}

export default BtnUniversal;
