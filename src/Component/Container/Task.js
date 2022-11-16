import React from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch} from 'react-redux';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

export const Task = () => {
  const dispatch = useDispatch()  
  return (
    <Box sx={{p: 3}} style={{textAlign: "left"}}>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">I Want to Company Logo</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => dispatch({type:"Company_Logo", payload: e.target.value})}
      >
        <FormControlLabel value="text-left" control={<Radio />} label="Left" />
        <FormControlLabel value="text-right" control={<Radio />} label="Right" />
        <FormControlLabel value="text-center" control={<Radio />} label="Center" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="Disable"
        />
      </RadioGroup>
    </FormControl>
    <br />
    <br />
    {/* Color */}
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Preset Color</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => dispatch({type:"Preset_Color", payload: e.target.value})}
      >
        <FormControlLabel value="background-blue" control={<Radio />} label="Blue (#1976d2)" />
        <FormControlLabel value="background-red" control={<Radio />} label="Red (#ff0000)" />
      </RadioGroup>
    </FormControl>
    <Typography variant="subtitle1" gutterBottom>Preset Apply Only Header Background, Button, Radio Button & Switch</Typography>  
    <br />
    
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked onChange={(e) => 
        dispatch({type:"Header_Fixed", payload: e.target.checked})
        } />} label="I Want a Header" />

    <FormControlLabel control={<Switch defaultChecked onChange={(e) => 
        dispatch({type:"Footer_Fixed", payload: e.target.checked})
        } />} label="I Want a Footer" />
    
    <FormControlLabel control={<Switch defaultChecked onChange={(e) => 
        dispatch({type:"Drawer_Overlay", payload: e.target.checked})
        } />} label="I Want a Drawer Overlay Mode (Requires Header or Footer)" />

    <FormControlLabel control={<Switch defaultChecked onChange={(e) => 
        dispatch({type:"Left_Side_Drawer", payload: e.target.checked})
        } />} label="I Want a Left side Drawer" />

    <FormControlLabel control={<Switch defaultChecked onChange={(e) => 
        dispatch({type:"Right_Side_Drawer", payload: e.target.checked})
        } />} label="I Want a Right side Drawer" />

    <FormControlLabel control={<Switch defaultChecked onChange={(e) => 
        dispatch({type:"Navigation_Tabs", payload: e.target.checked})
        } />} label="I Want a Navigation Tabs(Requires Header)" />

    <FormControlLabel control={<Switch defaultChecked onChange={(e) => 
        dispatch({type:"Bottom_Menu", payload: e.target.checked})
        } />} label="I Want a Bottom Menu (Requires Footer)" />
      
    </FormGroup> 
    </Box>
  )
}
