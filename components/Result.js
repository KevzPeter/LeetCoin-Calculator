const Result = (props) => {

    const renderSwitch = () => {
        return (
            <div className="flex flex-col rounded-xl p-4 m-2 text-left bg-slate-800">
                <span>{props.config.dailyCheckin ? "✅" : "❌"} Daily Check-in</span>
                <span>{props.config.dailyChallenge ? "✅" : "❌"} Daily Challenge</span>
                <span>{props.config.weeklyContest ? "✅" : "❌"} Weekly Contest</span>
                <span>{props.config.biweeklyContest ? "✅" : "❌"} Biweekly Contest</span>
                <span>{props.config.premiumWeekly ? "✅" : "❌"} 4 Weekly Challenges (Premium)</span>
                <span className="mt-2">You can redeem your reward on <strong className={props.textColor}>{props.endDate}</strong></span>
            </div>
        )
    }

    return (
        <div>
            {renderSwitch()}
        </div>
    )
}

export default Result;