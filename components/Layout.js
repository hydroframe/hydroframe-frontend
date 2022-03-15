import styles from '../styles/Home.module.css'
const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout
