import React from 'react';
import { Label, Input } from 'reactstrap';
import { dataList, dataProps } from '../data';

//usestate prop type
type Props = {
  selectValue: string;
  setSelectValue: (selected: string) => void;
}

function SelectList({ selectValue, setSelectValue }: Props) {

  return (
    <>
      <Label for="exampleSelect">[Select Field]</Label>
      <Input type="select" name="select" value={selectValue} id="itemSelect" bsSize="lg" onChange={(event) => setSelectValue(event.target.value)} >
        {MakeOption({ count: 10, text: 'option item to add list' })}
      </Input>
    </>
  );
}

//make jsx option element with data created form dataList
function MakeOption(props: dataProps) {
  const list = dataList(props);
  return list.map((text) => <option value={text}> {text} </option>);
}

export default SelectList;
