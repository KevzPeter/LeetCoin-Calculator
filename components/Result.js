import styles from "../styles/Result.module.scss"

const Result=({endDate})=>{
    return(
        <div className={styles.result}>
            <span>You can redeem by <strong>{endDate}</strong></span>
            <span>Till then, keep coding!</span>
        </div>
    )
}

export default Result;