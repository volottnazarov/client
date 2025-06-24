import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function BasicTextFields() {

    const [textInput, setTextInput] = useState('');
    console.log(textInput);

    const handleChange = (event) => {
        setTextInput(event.target.value);
    }
    return (
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
            <TextField id="outlined-basic" label="Введите :" variant="outlined" value={textInput} onChange={handleChange} />
        </Box>
    );
}