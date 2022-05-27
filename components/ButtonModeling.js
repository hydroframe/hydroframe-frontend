import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link"
import DomainDisplay from '../pages/domainDisplay';

const ButtonModeling = ({item, onDelete, index}) => {
  return (
    <>
    {item.map(it => (
      <Stack key={it.id} spacing={3} direction="row" style={{margin: "10px"}}>
      <Link href="/domaindetails/[id]" as={`/domaindetails/`+ it.id}  passHref> 
      <div>
      <p style={{fontSize: "16px", marginRight: "6px", cursor:"pointer"}}>{it.name}</p>
      <p style={{fontSize: "14px", marginRight: "5px", marginLeft: "5px"}}>{it.description}</p>
      </div>
      </Link>
      <Button style={{height: "30px", padding: "20px"}} variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => onDelete(index)}>Remove</Button>
    </Stack>
  ))}
  </>

  )
}

export default ButtonModeling
