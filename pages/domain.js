import styles from '../styles/Irene.module.css';
import React from 'react';
import { Button } from '@mui/material';

const Domain = () => {
    return (
        <div>
        <h1>Create New Domain</h1>

        <table>
            <tr>
                <td className={styles.td_style}>
                    <label>
                        Domain Name:
                        <input type="text" name="name" placeholder="name" />
                    </label>
                </td>
            </tr>

            <tr>
            <td className={styles.td_style}>
                    <label>
                        Description:
                        <textarea className={styles.desc_box} placeholder="enter description" />
                    </label>
                 </td>
            </tr>

            <tr>
            <td className={styles.td_style}>
                <Button className={styles.btn_style} variant="contained"
                    >Submit</Button>
                <Button className={styles.btn_style} variant="contained" href="https://subset.cuahsi.org/parflow/v1_0">Subset</Button>
                </td>
            </tr>

        </table>
    </div>
    )
}

export default Domain
