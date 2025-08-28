import React, { useState } from 'react';

const Calc = () => {
  const [value, setValue] = useState(0);

  const toBase16 = (n) => {
    return (+n).toString(16).padStart(2, '0');
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="ui_input mt-4">
      <input
        inputMode="numeric"
        pattern="[0-9]*"
        type="number"
        value={value}
        onChange={handleInputChange}
      />
      <div className="label">{toBase16(value)}</div>
    </div>
  );
};

export default Calc;
