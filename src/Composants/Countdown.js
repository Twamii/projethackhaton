import Countdown from 'react-countdown';

function CountdownTest() {
  const deadline = new Date('2025-05-16T18:00:00').getTime();

  return (
    <Countdown
      date={deadline}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span>Hello</span>;
        } else {
          return (
            <div className="countdown-container gap-5">
              <div className="countdown-item">
                <div className="time">{String(days).padStart(2, '0')}</div>
                <div className="label">Days</div>
              </div>
              
              <div className="countdown-item">
                <div className="time">{String(hours).padStart(2, '0')}</div>
                <div className="label">Hours</div>
              </div>
              
              <div className="countdown-item">
                <div className="time">{String(minutes).padStart(2, '0')}</div>
                <div className="label">Minutes</div>
              </div>
              
              <div className="countdown-item">
                <div className="time">{String(seconds).padStart(2, '0')}</div>
                <div className="label">Seconds</div>
              </div>
            </div>
          );
        }
      }}
    />
  );
}

export default CountdownTest;
