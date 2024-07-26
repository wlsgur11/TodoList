import styles from './style.js'
import One from './One.jsx'
import Two from './Two.jsx'

const CSSTest = () => {
    return (
        <div className="container">
            <h2>Global Css</h2>
            <button type="button" class="btn btn-primary">Primary</button>
            <p style={styles.textStyle}>Hello world</p>
            <hr style={styles.dashStyle}></hr>
            <One />
            <Two />
        </div>
    )
}

export default CSSTest