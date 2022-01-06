import React from 'react';

interface Props {
  name: string;
  handleRename: any;
  id: any;
}

const FieldInput: React.FC<Props> = function FieldInput({
  name,
  handleRename,
  id,
}) {
  return (
    <label className="rename__label" htmlFor={name}>
      Rename your pokemon
      <input
        className="rename__input"
        type="text"
        id={id}
        value={name}
        placeholder="Name your pokemon here"
        onChange={handleRename}
      />
    </label>
  );
};

export default FieldInput;
