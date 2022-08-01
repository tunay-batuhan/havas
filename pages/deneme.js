import { useState } from "react";
import Select from "react-select";
export default function deneme() {
  const [firstName, setFirsName] = useState("");
  const [select, setSelect] = useState("");
  const [error, setError] = useState(false);

  const options = [
    { Selectvalue: "chocolate", label: "Chocolate" },
    { Selectvalue: "strawberry", label: "Strawberry" },
    { Selectvalue: "vanilla", label: "Vanilla" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("deneme", select.Selectvalue);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={error ? "error" : ""} name="asd"></input>
        <Select
          options={options}
          instanceId="long-value-select"
          placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz."
          onChange={(e) => setSelect(e)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
