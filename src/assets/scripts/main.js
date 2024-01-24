document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const eventDate = new Date('Mar 12, 2024 19:00:00');
    const eventTimestamp = eventDate.getTime();

    const countHours = setInterval(() => {
        const now = new Date();
        const presentTimestamp = now.getTime();

        const untilEvent = eventTimestamp - presentTimestamp;

        const daysInMiliseconds = 1000 * 3600 * 24;
        const hoursInMiliseconds = 1000 * 3600;
        const minutesInMiliseconds = 1000 * 60;
        const secondsInMiliseconds = 1000;

        const daysUntilEvent = Math.floor(untilEvent / daysInMiliseconds);
        const hoursUntilEvent = Math.floor((untilEvent % daysInMiliseconds) / hoursInMiliseconds);
        const minutesUntilEvent = Math.floor((untilEvent % hoursInMiliseconds) / minutesInMiliseconds);
        const secondsUntilEvent = Math.floor((untilEvent % minutesInMiliseconds) / secondsInMiliseconds);

        const showTime = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}min ${secondsUntilEvent}s`;

        document.getElementById('counter').innerText = untilEvent > 0 ? showTime : '-- evento expirado --';
    }, 1000);
});
