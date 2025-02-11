import { useState } from "react";
import { StyledBtnGenre } from "./styled";

interface BtnGenreProps {
  setNewGange: (ganre: string) => void;
  label: string;
  name: string;
}

function BtnGenre(props: BtnGenreProps) {
  const { label, name, setNewGange } = props;
  const [active, setActive] = useState(false);
  const onClick = () => {
    setNewGange(name);
    setActive(!active);
  };

  return (
    <StyledBtnGenre active={active} onClick={onClick} variant="primary">
      <div>{label}</div>
    </StyledBtnGenre>
  );
}

export default BtnGenre;
