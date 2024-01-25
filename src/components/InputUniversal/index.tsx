// import { useState } from "react";
import { InputEnum } from "../../types/enums/InputEnum";
import "./style.css";
// import Form from "react-bootstrap/Form";
import FacebookSvg from "../../assets/img/facebook.svg?react";

interface InputType {
  type?: InputEnum;
}

function InputUniversal(props: InputType) {
  const { type = InputEnum.default } = props;
  // const [isShow, setIsShow] = useState(false);

  return (
    <>
      {type === InputEnum.password && (
        <div>
          <FacebookSvg />
          {/* <input type={isShow ? "text" : "password"} />
          {isShow ? (
            <img
              src={"unlockPasswordIcon"}
              className="IconStyle"
              alt="IconStyle"
            />
          ) : (
            <img
              src={"unlockPasswordIcon"}
              className="IconStyle"
              alt="IconStyle"
            />
          )} */}
        </div>
      )}
      {type === InputEnum.email && (
        <div>
          <img src={"inputIcon"} className="IconStyle" alt="IconStyle" />
          <input type={type} />
          <img
            src={"unlockPasswordIcon"}
            className="IconStyle"
            alt="IconStyle"
          />
        </div>
      )}
      {type === InputEnum.default && (
        <div>
          <img src={"inputIcon"} className="IconStyle" alt="IconStyle" />
          <input type={type} />
          <img
            src={"unlockPasswordIcon"}
            className="IconStyle"
            alt="IconStyle"
          />
        </div>
      )}
    </>
  );
}

export default InputUniversal;
