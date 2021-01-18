const DDD = () => { 
    return (
        <div className={s.container} >
            <div>
                <h2 className={s.title}>Please leave feedback</h2>
            </div>
            <div>
                <button type="button" className={s.feedbackBtn} onClick={this.handlGood}>Good</button>
                <button type="button" className={s.feedbackBtn} onClick={this.handlNeutral}>Neutral</button>
                <button type="button" className={s.feedbackBtn} onClick={this.handlBad}>Bad</button>
            </div>
            <div>
                <h2 className={s.title}>Statistics</h2>
            </div>
            <div>
                <p>Good: { this.state.good}</p>
                    <p>Neutral: { this.state.neutral} </p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {}</p>
                    <p>Positive feetback: {}%</p>
            </div>
        </div>
    );
};
export default DDD;
