import React from "react";
import { useState } from "react";
import { calculate } from "../utils/calculator.util";
import { rewards } from "../utils/rewards.util";
import Result from "./Result";
import styles from "../styles/Form.module.scss";

const Form=()=>{

    const [endDate, setEndDate] = useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let rewardCost = e.target.reward.value;
        let currCoins = e.target.coins.value;
        let coinsNeeded = Math.max(0, rewardCost - currCoins);
        let streak = Math.min((new Date).getDate(), e.target.streak.value);
        let res = calculate(coinsNeeded, streak);
        setEndDate(res);
    }

    return(
        <>
            <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
                <div className={styles.formGroup}>
                    <label>Current Leetcoins 💰</label>
                    <input type="number" name="coins" id="coins" min="0"></input>    
                </div>
                <div className={styles.formGroup}>
                    <label>Streak 🔥</label>
                    <input type="number" name="streak" id="streak" min="0"></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Choose reward 🏆</label>
                    <select name="reward">
                        {rewards.map((el, idx)=>{
                            return(
                                <option key={idx} value={el.coins}>{el.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>
            {endDate == null ? null : <Result endDate={endDate}/>}
            </>
    )
}

export default Form;