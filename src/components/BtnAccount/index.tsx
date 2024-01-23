import { Button } from "react-bootstrap";
import { ReactNode } from "react";

interface BtnAccountType {
  onClick: () => void;
  label?: string;
  children: ReactNode;
  classList: string;
}

function BtnAccount(props: BtnAccountType) {
  const { onClick, classList, label, children } = props;

  return (
    <Button className={classList} onClick={onClick} variant="primary">
      {children}
      <div>{label}</div>
    </Button>
  );
}

export default BtnAccount;
