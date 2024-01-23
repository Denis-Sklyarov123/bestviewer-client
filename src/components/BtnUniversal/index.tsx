import { Button } from "react-bootstrap";

interface BtnUniversalType {
  onClick: () => void;
  label?: string;
  classList: string;
}

function BtnUniversal(props: BtnUniversalType) {
  const { onClick, classList, label } = props;

  return (
    <Button className={classList} onClick={onClick} variant="primary">
      <div>{label}</div>
    </Button>
  );
}

export default BtnUniversal;
