import { useNavigate } from "react-router-dom";
import {
  AccountSelectorBar,
  Header,
  InterestsSelector,
  UniversalBtn,
  ContainerBtnNavigate,
  BodyInterest,
} from "./styled";
import BtnGenre from "../../components/BtnGenre";
import { useEffect, useState } from "react";

function ChooseInterest() {
  const navigate = useNavigate();
  const [genre123, setgenre123] = useState<string[] | never>([]);
  const genres = [
    { name: "Action", lable: "Action" },
    { name: "Drama", lable: "Drama" },
    { name: "Comedy", lable: "Comedy" },
    { name: "Ecchi", lable: "Ecchi" },
    { name: "Adventure", lable: "Adventure" },
    { name: "Mecha", lable: "Mecha" },
    { name: "Romance", lable: "Romance" },
    { name: "Science", lable: "Science" },
    { name: "Music", lable: "Music" },
    { name: "School", lable: "School" },
    { name: "Seinen", lable: "Seinen" },
    { name: "Shoujo", lable: "Shoujo" },
    { name: "Mystery", lable: "Mystery" },
    { name: "Vampire Isekai", lable: "Vampire Isekai" },
    { name: "Shounen", lable: "Shounen" },
    { name: "Television", lable: "Television" },
    { name: "Superheroes", lable: "Superheroes" },
    { name: "Magic", lable: "Magic" },
    { name: "Game", lable: "Game" },
    { name: "Slice of Life", lable: "Slice of Life" },
    { name: "Music", lable: "Music" },
    { name: "Shoujo", lable: "Shoujo" },
    { name: "Romance", lable: "Romance" },
    { name: "Comedy", lable: "Comedy" },
    { name: "Superheroes", lable: "Superheroes" },
    { name: "Vampire Isekai", lable: "Vampire Isekai" },
    { name: "Slice of Life", lable: "Slice of Life" },
    { name: "Drama", lable: "Drama" },
    { name: "Action", lable: "Action" },
    { name: "Ecchi", lable: "Ecchi" },
  ];

  const setNewGange = (genre: string) => {
    setgenre123((prevgenres) => [...prevgenres, genre]);
  };

  useEffect(() => {
    console.log(genre123);
  }, [genre123]);

  return (
    <>
      <BodyInterest isGetStarted={true}>
        <Header>Choose Your Interest</Header>
        <InterestsSelector>
          Choose your interests and get the best anime recommendations. Don't
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
      </BodyInterest>
    </>
  );
}

export default ChooseInterest;
