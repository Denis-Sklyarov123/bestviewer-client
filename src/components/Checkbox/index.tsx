import Form from "react-bootstrap/Form";

interface CheckboxType {
  labelProp: string;
  classList?: string;
}

function Checkbox(props: CheckboxType) {
  const { labelProp, classList } = props;

  return (
    <Form>
      <Form.Check
        type="checkbox"
        label={labelProp}
        id="custom-checkbox"
        className={classList}
      />
    </Form>
  );
}

export default Checkbox;
