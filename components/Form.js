import React, { useState } from "react";
import { calculate } from "../utils/calculator.util";
import { rewards } from "../utils/rewards.util";
import Result from "./Result";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "./ui/select"
import { Button } from "./ui/button"
import { Label } from "./ui/label"



const Form = () => {

    const [res1, setRes1] = useState(null);
    const [res2, setRes2] = useState(null);
    const [res3, setRes3] = useState(null);
    const [res4, setRes4] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRes1(null);
        setRes2(null);
        setRes3(null);
        setRes4(null);
        let rewardCost = e.target.reward.value;
        let currCoins = e.target.coins.value;
        let coinsNeeded = Math.max(0, rewardCost - currCoins);
        let streak = Math.min((new Date).getDate(), e.target.streak.value);
        let accountType = e.target.accountType.value;
        setRes1(calculate(coinsNeeded, streak, "contest"));
        setRes2(calculate(coinsNeeded, streak, "daily"));
        setRes3(calculate(coinsNeeded, streak, "checkIn"));
        if (accountType === 'premium') {
            setRes4(calculate(coinsNeeded, streak, "contest", accountType));
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex flex-col rounded-xl p-8 gap-8 bg-slate-800" onSubmit={(e) => handleSubmit(e)}>
                <div className="grid grid-cols-2 items-center">
                    <Label htmlFor="id" className="text-md">🪙 Current LeetCoins</Label>
                    <Input type="number" placeholder="Enter coins" name="coins" id="coins" min="0" defaultValue={0} />
                </div>
                <div className="grid grid-cols-2 items-center">
                    <Label htmlFor="streak" className="text-md">🔥 Streak</Label>
                    <Input type="number" placeholder="Enter streak" name="streak" min="0" defaultValue={0} />
                </div>
                <div className="grid grid-cols-2 items-center">
                    <Label htmlFor="reward" className="text-md">🏆 Choose reward</Label>
                    <Select name="reward" id="reward">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {rewards.map((el, idx) => {
                                    return (
                                        <SelectItem key={idx} value={el.coins.toString()}>{el.name}</SelectItem>
                                    )
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <Label htmlFor="accountType" className="text-md">👤 Account Type</Label>
                    <Select name="accountType" id="accountType">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Button variant="custom" type="submit" className="m-auto">Calculate</Button>
            </form>
            <div className='flex gap-1 my-8'>
                {res4 && <Result endDate={res4} config={{ "dailyCheckin": true, "dailyChallenge": true, "weeklyContest": true, "biweeklyContest": true, "premiumWeekly": true }} textColor={"text-green-400"} />}
                {res1 && <Result endDate={res1} config={{ "dailyCheckin": true, "dailyChallenge": true, "weeklyContest": true, "biweeklyContest": true, "premiumWeekly": false }} textColor={"text-green-600"} />}
                {res2 && <Result endDate={res2} config={{ "dailyCheckin": true, "dailyChallenge": true, "weeklyContest": false, "biweeklyContest": false, "premiumWeekly": false }} textColor={"text-orange-400"} />}
                {res3 && <Result endDate={res3} config={{ "dailyCheckin": true, "dailyChallenge": false, "weeklyContest": false, "biweeklyContest": false, "premiumWeekly": false }} textColor={"text-red-500"} />}
            </div>
        </div>
    )
}

export default Form;