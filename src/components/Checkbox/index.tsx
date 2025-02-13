import { useState } from "react";
import { StyledCheckbox } from "./styled";
import { Form } from "react-bootstrap";

interface CheckboxType {
  labelProp: string;
  classList?: string;
}

function Checkbox(props: CheckboxType) {
  const { labelProp, classList } = props;
  const [showParticles, setShowParticles] = useState(false);

  const handleCheck = () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 600);
  };

  return (
    <Form>
      <StyledCheckbox
        type="checkbox"
        label={
          <>
            {labelProp}
            {showParticles && (
              <span className="particles">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="particle"
                    style={
                      {
                        "--x": `${Math.random() * 150 - 75}px`,
                        "--y": `${Math.random() * 150 - 75}px`,
                        animationDuration: "0.8s",
                      } as React.CSSProperties
                    }
                  />
                ))}
              </span>
            )}
          </>
        }
        id="custom-checkbox"
        className={classList}
        onChange={handleCheck}
      />
    </Form>
  );
}

export default Checkbox;
