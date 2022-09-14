import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from '@mui/icons-material/Share';
import ArchiveIcon from '@mui/icons-material/Archive';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Link from "next/link";

const ButtonModeling = ({ item, onDelete, index }) => {
    return (
        <>

            <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Creation Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {item.map((it) => (
                    <tbody key={it.id}>
                        <tr key={it.id} style={{ margin: "5px" }}>
                            <td>{it.id}</td>
                            <Link
                                href={`/domaindetails/${it.id}`}
                                passHref><td style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>{it.name}</td>
                            </Link>
                            <td>{it.username}</td>
                            <td>{it.description}</td>
                            <td>{it.created_at}</td>
                            <td>
                                <ul id="domain-btn">
                                    <li>
                                        <Button style={{ height: "20px", padding: "15px", margin: "5px" }} variant="contained" startIcon={<ContentCutIcon />} >Subset</Button>
                                        <Button style={{ height: "20px", padding: "15px", margin: "5px" }} variant="contained" color="error" startIcon={<ArchiveIcon />} >Archive</Button>
                                        <Button style={{ height: "20px", padding: "15px", margin: "5px" }} variant="contained" startIcon={<ShareIcon />} >Share</Button>
                                        <Button style={{ height: "20px", padding: "15px" }} variant="contained" startIcon={<ContentCopyIcon />} >Copy</Button>

                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    );
};

export default ButtonModeling;
