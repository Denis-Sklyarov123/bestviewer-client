import { StyledBtnUniversal } from "./styled";

interface BtnUniversalType {
  onClick: () => void;
  label?: string;
  bgColor: string;
  color: string;
  minWidth: string;
}

function BtnUniversal(props: BtnUniversalType) {
  const { onClick, label, bgColor, color, minWidth } = props;

  return (
    <StyledBtnUniversal
      $minWidth={minWidth}
      $color={color}
      $bgColor={bgColor}
      onClick={onClick}
      variant="primary"
    >
      <div>{label}</div>
    </StyledBtnUniversal>
  );
}

export default BtnUniversal;
