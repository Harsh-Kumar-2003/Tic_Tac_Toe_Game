export default function Log({logs, playerName}) {
    return (
        <div className="log">
            <h3>Log</h3>
            <div className="log-list">
                {logs.map((log) => <p>{playerName[log]} turn!</p>)}
            </div>
        </div>
    );
}