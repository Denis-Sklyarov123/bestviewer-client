import { StyledBtnGenre } from "./styled";

interface BtnUniversalType {
  onClick: () => void;
  label?: string;
}

function BtnGenre(props: BtnUniversalType) {
  const { onClick, label } = props;

  return (
    <StyledBtnGenre onClick={onClick} variant="primary">
      <div>{label}</div>
    </StyledBtnGenre>
  );
}

export default BtnGenre;
