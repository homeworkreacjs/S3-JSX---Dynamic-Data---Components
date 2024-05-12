function Time() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Format the time
    let timeString = `${hours}:${minutes}:${seconds}`;

    return (
        <h2>
            {timeString} PM
        </h2>
    );
}

export default Time;