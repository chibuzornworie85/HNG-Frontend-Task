function updateTimeAndDay() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');
    const now = new Date();
    const utcString = now.toUTCString();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    timeElement.textContent = utcString.slice(17, 25);
    dayElement.textContent = dayOfWeek;
}

window.onload = function() {
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
}
