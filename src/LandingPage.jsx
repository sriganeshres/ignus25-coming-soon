import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [timeRemaining, setTimeRemaining] = useState('');

    const targetDate = new Date('Feb 9, 2025 00:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            setTimeRemaining("Countdown Ended!");
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    };

    useEffect(() => {
        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval); // Cleanup the interval on unmount
    }, []);

    return (
        <div className="countdown-container">
            <div className="countdown">{timeRemaining} {" "} to go !!</div>
        </div>
    );
}

export default App;
