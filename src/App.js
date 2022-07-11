import formFields from "./form_fields.json"; //Import JSON schema
import { useState } from "react";
import InputField from "./form_elements/input";
import DropDown from "./form_elements/dropdown";

function App() {
  formFields.fields.sort((a, b) => a.order - b.order); // Arrange the input fields in order by sort
  const [fields, setFields] = useState(formFields.fields);
  return (
    <div className="App container" style={{ width: "50%" }}>
      <form>
        {fields.map((item) => {
          switch (
            item.type //To return inputfield type
          ) {
            case "number":
              return (
                <InputField
                  label={item.label}
                  key={item.key}
                  isRequired={item.isRequired}
                  order={item.order}
                  isReadonly={item.isReadonly}
                  unit={item.unit}
                  type={item.type}
                />
              );
            case "dropdown":
              return (
                <DropDown
                  label={item.label}
                  items={item.items}
                  key={item.key}
                  isRequired={item.isRequired}
                  order={item.order}
                  isReadonly={item.isReadonly}
                  unit={item.unit}
                  type={item.type}
                />
              );
            case "date":
              return (
                <InputField
                  label={item.label}
                  key={item.key}
                  isRequired={item.isRequired}
                  order={item.order}
                  isReadonly={item.isReadonly}
                  unit={item.unit}
                  type={item.type}
                />
              );
            default:
              return null;
          }
        })}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
