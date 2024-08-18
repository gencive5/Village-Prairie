import React, { useState, useEffect } from 'react';
import './DelayedTime.css';

const DelayedTime: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [isDaytime, setIsDaytime] = useState(false);

  useEffect(() => {
    const delay = 10 * 60 * 1000; // 10 minutes in milliseconds

    const updateDelayedTime = () => {
      const currentDelayedTime = new Date();
      const delayedTime = new Date(currentDelayedTime.getTime() + delay);
      const formattedTime = delayedTime.toLocaleTimeString();
      setTime(formattedTime);

      const currentHour = delayedTime.getHours();
      setIsDaytime(currentHour >= 6 && currentHour < 18);
    };

    // Call the function initially
    updateDelayedTime();

    const intervalId = setInterval(updateDelayedTime, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  const timeFontClass = `time-font ${isDaytime ? '' : 'night'}`;

  return (
    <div style={{ backgroundColor: isDaytime ? 'white' : 'black', minHeight: '100vh' }}>
      <div className={timeFontClass}>{time}</div>
    </div>
  );
};

export default DelayedTime;
