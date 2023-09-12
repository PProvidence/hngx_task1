function updateDayAndTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();
    
    // Update elements with the current day of the week and UTC time
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = 'Current Day of the Week: ' + currentDayOfWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = 'Current UTC Time: ' + currentUTCTime + ' milliseconds';
}

// Call the function to update the current day of the week and UTC time
updateDayAndTime();