// import { Form } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./DropDown.css";
/**
 * @author
 * @function SelectDropDown
 * */
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectDropDown = ({
  data,
  classname,
  name,
  label,
  handleInputchange,
  optional,
  defaultValue,
  defaultSelectValue,
}) => {
  const theme = useTheme();

  const _label = !!label;
  const _optional = optional || "";
  const _default = defaultValue || label;
  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        {_label && (
          <InputLabel id="demo-multiple-name-label" className="inputFieldOrgDetailLabel">
            {label}
          </InputLabel>
        )}

        <Select
          className={` SelectDropDown ${classname}`}
          value={defaultSelectValue}
          onChange={(e) => handleInputchange(e.target.value, name, _optional)}
          labelId="demo-multiple-name-label"
          MenuProps={MenuProps}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectDropDown;
