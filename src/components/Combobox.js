import React from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';

export default function Combobox(props){
    const handleChange = event => {
        props.onChange(event.target.value);
    }

    return(
        <NativeSelect
          value={props.names[0]}
          onChange={handleChange}
          inputProps={{
            name: 'Select Player',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
    );
}