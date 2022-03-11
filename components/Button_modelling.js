import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';

const Button_modelling = ({todo, index, onDelete}) => {
    return (
        <Stack spacing={3} direction="row" style={{margin: "10px"}}>
        <p style={{fontSize: "16px", marginRight: "5px"}}>{todo.text}</p>
        <Button variant="contained">Domain Dashboard</Button>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => onDelete(index)}>Remove</Button>
      </Stack>
    )
}

export default Button_modelling
