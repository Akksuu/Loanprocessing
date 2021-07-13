import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Application() {
    return (
        <div>
        <Grid>
                <Grid align='center'>
                   <h2>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name"   />
                    <TextField fullWidth label='Email' placeholder="Enter your email"   />
                    <FormControl component="fieldset" >
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number"   />
                    <TextField fullWidth label='Password' placeholder="Enter your password"  />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"  />
                    <TextField fullWidth label='Address' placeholder=" Enter your Address"   />
                    <TextField fullWidth label='State' placeholder="Enter your State"  />
                    <TextField fullWidth label='District' placeholder="Enter your  District"  />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' onClick={alert} color='primary'>Submit Application </Button>
                </form>
        </Grid>

        </div>
    )
}

export default Application
