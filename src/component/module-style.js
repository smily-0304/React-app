

import styles from "./style.module.css"

const ModuleStyles=()=>{
    return(
       <>
        <h4 className={styles.hello}>Module Style</h4>
        <ul className={styles.name}>
            <li>smily</li>
            <li>sowmya</li>
        </ul>
        <table className={styles.table}>
            <tr>
                <th>sl.no</th>
                <th>name</th>
                <th>number</th>
            </tr>
            <tr>
                <td>1</td>
                <td>smily</td>
                <td>123456789</td>
            </tr>
            <tr>
                <td>2</td>
                <td>sowmya</td>
                <td>09736543</td>
            </tr>
        </table>
       </>
    )
    
}
export default ModuleStyles
// to use module styles we have to import usind varaible