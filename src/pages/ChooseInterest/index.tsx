import { useNavigate } from "react-router-dom";
import {
  AccountSelectorBar,
  Header,
  InterestsSelector,
  UniversalBtn,
  ContainerBtnNavigate,
} from "./styled";
import BtnGenre from "../../components/BtnGenre";
import { useEffect, useState } from "react";

function ChooseInterest() {
  const navigate = useNavigate();
  const [genre123, setgenre123] = useState<string[] | never>([]);
  const genres = [
    { name: "aaa", lable: "AAAA" },
    { name: "bbb", lable: "BBB" },
    { name: "qwe_qwe", lable: "Qwe Qwe" },
  ];

  const setNewGange = (genre: string) => {
    setgenre123((prevgenres) => [...prevgenres, genre]);
  };

  useEffect(() => {
    console.log(genre123);
  }, [genre123]);

  return (
    <>
      <Header>Let's you in</Header>
      <InterestsSelector>
        Choose your interests and get the best movie recommendations. Don't
        worry, you can always change this later.
      </InterestsSelector>
      <AccountSelectorBar>
        {genres.map((item) => (
          <BtnGenre
            setNewGange={() => setNewGange(item.name)}
            label={item.lable}
            name={item.name}
            key={item.name}
          />
        ))}
      </AccountSelectorBar>

      <ContainerBtnNavigate>
        <UniversalBtn
          minWidth="20vh"
          color="#06c149"
          bgColor="#e6f9ed"
          onClick={() => navigate("/login")}
          label="Skip"
        />
        <UniversalBtn
          minWidth="20vh"
          color=""
          bgColor="#06c149"
          onClick={() => navigate("/login")}
          label="Continue"
        />
      </ContainerBtnNavigate>
    </>
  );
}

export default ChooseInterest;
