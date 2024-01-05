import React, { useState } from "react";
import { calculate } from "../utils/calculator.util";
import { rewards } from "../utils/rewards.util";
import Result from "./Result";
import styles from "../styles/Form.module.scss";

const Form = () => {

    const [res1, setRes1] = useState(null);
    const [res2, setRes2] = useState(null);
    const [res3, setRes3] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let rewardCost = e.target.reward.value;
        let currCoins = e.target.coins.value;
        let coinsNeeded = Math.max(0, rewardCost - currCoins);
        let streak = Math.min((new Date).getDate(), e.target.streak.value);
        setRes1(calculate(coinsNeeded, streak, "contest"));
        setRes2(calculate(coinsNeeded, streak, "daily"));
        setRes3(calculate(coinsNeeded, streak, "checkIn"));
    }

    return (
        <>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formGroup}>
                    <label htmlFor="id">Current Leetcoins 🪙</label>
                    <input type="number" name="coins" id="coins" min="0" defaultValue={0}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="streak">Streak 🔥</label>
                    <input type="number" name="streak" id="streak" min="0" defaultValue={0}></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="reward">Choose reward 🏆</label>
                    <select name="reward" id="reward">
                        {rewards.map((el, idx) => {
                            return (
                                <option key={idx} value={el.coins}>{el.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>
            <div className={styles.container}>
                {res1 && <Result endDate={res1} type="contest" />}
                {res2 && <Result endDate={res2} type="daily" />}
                {res3 && <Result endDate={res3} type="checkIn" />}
            </div>
        </>
    )
}

export default Form;