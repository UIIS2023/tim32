(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    function setupCountdown(containerId, festivalDate) {
        const countDown = festivalDate.getTime(),
            x = setInterval(function () {
                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById(`${containerId}-days`).innerText = Math.floor(distance / (day));
                document.getElementById(`${containerId}-hours`).innerText = Math.floor((distance % (day)) / (hour));
                document.getElementById(`${containerId}-minutes`).innerText = Math.floor((distance % (hour)) / (minute));
                document.getElementById(`${containerId}-seconds`).innerText = Math.floor((distance % (minute)) / second);

                if (distance < 0) {
                    document.getElementById(`${containerId}-headline`).innerText = "Festival je poceo!!!";
                    document.getElementById(`${containerId}-countdown`).style.display = "none";
                    document.getElementById(`${containerId}-content`).style.display = "block";
                    clearInterval(x);
                }
            }, 1000);
    }

    const today = new Date();
    setupCountdown("exit", new Date(today.getFullYear(), 6, 10, 18, 0, 0)); // 10 July at 6pm
    setupCountdown("ultra", new Date(today.getFullYear(), 2, 22, 16, 0, 0)); // 22 March at 4pm
    setupCountdown("tomorrowland", new Date(today.getFullYear(), 6, 19, 17, 0, 0)); // 19 July at 5pm
    setupCountdown("lovefest", new Date(today.getFullYear(), 7, 8, 19, 0, 0)); // 8 August at 7pm
}());
