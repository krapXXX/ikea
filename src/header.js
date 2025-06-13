import './header.css';

const ScrollingText = () => {
  const phrases = [
    '#вседлядому',
    '#швидкота зручно',
    '#buy now',
  ];

  const repeated = Array(20).fill(phrases).flat();

  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
        {repeated.map((phrase, index) => (
          <span key={index} className="scroll-item">{phrase}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
