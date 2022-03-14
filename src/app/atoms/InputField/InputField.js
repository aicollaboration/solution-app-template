import "./InputField.css";
import Input from '@mui/material/Input';

import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';


export default function InputField({
  name,
  type,
  placeholder,
  handleInputchange,
  value,
  classname,
  parentclassname,
  readonly,
}) {
  const _placeholder = placeholder || "Enter Value";
  const _type = type || "text";
  const _classname = classname || "";
  const _parentclassname = parentclassname || "inputFieldOrgDetail";

  const _readonly = readonly || false;

  return (
    <>
      <div className={_parentclassname}>
        <div className="inputFieldOrgDetailLabel">{_placeholder}</div>

        {/* <Input
            placeholder="Search in faqs..."
            className=""
            disableUnderline
            fullWidth
            inputProps={{
              'aria-label': 'Search',
            }}
            value={searchText}
            onChange={handleSearch}
          /> */}

        

      <Paper className="flex shrink-0 items-center h-56 w-full max-w-md mt-16 sm:mt-32 rounded-16 shadow">
          <Icon color="action" className="mx-16">icon</Icon>
          <Input
          type={_type}
          name={name}
          disableUnderline
          fullWidth
          className={_classname}
          placeholder={_placeholder}
          value={value}
          onChange={(e) => handleInputchange(e.target.value, name)}
          readOnly={_readonly}
        />
      </Paper>

      </div>
    </>
  );
}
