import styles from "../styles/Header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.name}>
                    <h1>Empresa X</h1>
                </div>

                <div className={styles.links}>
                    <a href="#aa">link1</a>
                    <a href="#aaa">link2</a>
                </div>
                
            </div>

        </header>
    );
}

export default Header;
