import './second-block.css';

const SecondBlock = () => {
  return (
    <div className="block">
      <div className="title">ЗНАЙДИ ТЕ, ЩО ШУКАЄШ!</div>

      <div className="imgblock">
        <div >
          <img
            src="/image1.png"
            alt="Нова колекція"
            className = "img1"
          />
          <div className="img1textblock">
            <div className="img1text">НАША НОВА КОЛЛЕКЦІЯ</div>
            <img src="/arrow.png" alt="Arrow" className="img1icon" />
          </div>
        </div>

        <div>
          <img
            src="/image2.png"
            alt="Пропозиції"
            className = "img1"
          />
          <div className="img1textblock">
            <div className="img1text">НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ</div>
            <img src="/arrow.png" alt="Arrow" className="img1icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
