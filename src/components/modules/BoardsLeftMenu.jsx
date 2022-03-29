import styles from '../styles/BoardsLeftMenu.module.css';
function BoardsLeftMenu(){
  return (
    <div className={styles.leftMenu}>
        <div className={styles.menuItem}>Tables</div>
        <div className={styles.menuItem}>Examples</div>
        <div className={styles.menuItem}>Main Page</div>
    </div>
  );
}
export default BoardsLeftMenu;