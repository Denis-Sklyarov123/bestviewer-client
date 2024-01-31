import { ReactNode } from "react";
import { StyledBootstrapButton } from "./styled";

interface BtnAccountType {
  onClick: () => void;
  label?: string;
  children: ReactNode;
  bgColor: string;
}

function BtnAccount(props: BtnAccountType) {
  const { onClick, label, children, bgColor } = props;

  return (
    <StyledBootstrapButton
      $bgColor={bgColor}
      onClick={onClick}
      variant="primary"
    >
      {children}
      <div>{label}</div>
    </StyledBootstrapButton>
  );
}

export default BtnAccount;
