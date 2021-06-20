import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider,createMuiTheme } from '@material-ui/core';
import  {green, orange} from '@material-ui/core/colors'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { black } from 'chalk';

const useStyle= makeStyles({
    root: {
        border: 0,
        borderRadius: 20,
        color: 'white',
        background: 'black'
    }
})
const theme= createMuiTheme({
    typography:{
        h1: {
            fonSize: 10,
        }

    },
    palette:{
        primary :{
            main:green[500],
        },
        secondary :{
            main :orange[500],
        }
    }
})

const Material = () => {

    const [checked, setChecked] = React.useState();

    const handleChange = (e) => {
      setChecked(e.target.checked);
    };

    return (
        <div className="material">
        <ThemeProvider theme={theme}>
            <Container maxWidth='md' 
            style={{
                backgroundColor: '#999',
                height: '100vh',
            }}>
        <div>
            <Typography variant='h1'> hello world</Typography>
            <form  noValidate autoComplete="off">
            <ButtonGroup variant="contained">
                <Button 
                color="primary"
                startIcon={<SaveIcon/>}
                style={{
                    margin: '0px 10px 0px 0px',
                    border: '1px solid black',
                boxShadow: '0px 5px 5px 0px blue',
                }}>
                    Save
                </Button>
                <Button
                color="secondary"
                startIcon={<DeleteIcon/>}
                >
                    Delete
                </Button>
            </ButtonGroup>
            <Button
            className={useStyle().root}
            style={{
                background:'pink'
            }}> hi</Button>
            <FormControlLabel
                control={
                    <CheckBox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                       />
                }
                label="hello"
            />

<FormControlLabel
                control={
                    <CheckBox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                       />
                }
                label="hello"
            />
            <TextField id="standard-basic" type="email" />
            <TextField id="filled-basic" label="Email" placeholder="example@gmail.com" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
            
        </div>
        </Container>
        </ThemeProvider>
        </div>
    );
};

export default Material;