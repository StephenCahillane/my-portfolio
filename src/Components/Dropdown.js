import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const Dropdown = ({ setSelectedValue, selectedValue }) => {

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={{
                borderColor: '#39FF14', // Set the border color
                '& .MuiInputLabel-root': {
                    color: '#39FF14', // Set label color
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#39FF14', // Set border color
                    },
                    '&:hover fieldset': {
                        borderColor: '#39FF14', // Set hover border color
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#39FF14', // Set focused border color
                    },
                }
            }}>
                <InputLabel id="dropdown-label">Select Option</InputLabel>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    label="Select Option"
                    onChange={handleChange}
                    sx={{
                        color: '#39FF14', // Set text color inside the dropdown
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Team Mentorship">Team Mentorship</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default Dropdown;
