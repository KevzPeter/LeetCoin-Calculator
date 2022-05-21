import styles from "../styles/Result.module.scss"

const Result=(props)=>{

    const renderSwitch=()=>{
        switch(props.type){
            case "contest":
                return(
                    <div className={styles.result}>
                        <span>✅ Daily Check-in</span>
                        <span>✅ Daily Challenge</span>
                        <span>✅ Weekly Contest</span>
                        <span>✅ Biweekly Contest</span>
                        <span>You can redeem your reward on <strong id={styles.green}>{props.endDate}</strong></span>
                    </div>
                )
            case "daily":
                return(
                    <div className={styles.result}>
                        <span>✅ Daily Check-in</span>
                        <span>✅ Daily Challenge</span>
                        <span>❌ Weekly Contest</span>
                        <span>❌ Biweekly Contest</span>
                        <span>You can redeem your reward on <strong id={styles.orange}>{props.endDate}</strong></span>
                    </div>
                )
            case "checkIn":
                return(
                    <div className={styles.result}>
                        <span>✅ Daily Check-in</span>
                        <span>❌ Daily Challenge</span>
                        <span>❌ Weekly Contest</span>
                        <span>❌ Biweekly Contest</span>
                        <span>You can redeem your reward on <strong id={styles.red}>{props.endDate}</strong></span>
                    </div>
                )
        }
    }

    return(
        <div>
            {renderSwitch()}
        </div>
    )
}

export default Result;