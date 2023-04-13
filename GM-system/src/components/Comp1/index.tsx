// import "./comp1.scss"; // 全局引入
// 模块化的引入
import styles from "./comp1.module.scss";

function Comp1() {
  return (
    <div className={styles.box}>
      <p>This is the content of c1</p>
    </div>
  );
}

export default Comp1;
