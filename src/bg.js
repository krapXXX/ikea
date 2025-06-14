import './bg.css';

export const Bg = () => (
  <div style={{ position: 'relative' }}>
    <img src="/bg.png" className="bg" alt="Background" />

    <div className="navbar">
  <div className="nav-left">
    <div className="burgerbox">
      <img src="/burger.png" className="iconbg" alt="Menu" />
      <div>Меню</div>
    </div>
    <img src="/logo.png" className="logo" alt="Logo" />
    <a href="#">Товари</a>
    <a href="#">Кімнати</a>
    <a href="#">Дизайн</a>
  </div>

  <div className="nav-right">
    <div className="nav-item">
      <img src="/location.png" className="iconbg" alt="Location" />
      <span>Київ</span>
    </div>
    <div className="nav-item">
      <img src="/user.png" className="iconbg" alt="User" />
      <span>Привіт! Увійдіть В Систему</span>
    </div>
    <div className="iconboxnav">
      <img src="/cart.png" className="iconbg" alt="Cart" />
      <img src="/like.png" className="iconbg" alt="Like" />
    </div>
  </div>
</div>

    <div className="titlebg">все для дому</div>
<div className="searchbox">
    <div className="search">
      <div className="iconblock">
        <img src="/search.png" className="iconbg" alt="Search" />
        <span className="textbg">Пошук</span>
      </div>
    </div>
    </div>
    <div className = "buttonbox">
    <div className = "create">
створити акаунт та почати!
    </div>
    <div className="catalog">
      каталог {'>'}
      </div>
      </div>

<div className="products">
  <div className="itembox">
    <img src="/1.png" alt="Pillow" />
    <div className="blockbg">
      <div className="inblocktitle">ПОДУШКИ</div>
      <div className="inblocktext">спальна кімната...</div>
      <div className="inblockprice">12$</div>
    </div>
  </div>

  <div className="itembox">
    <img src="/2.png" alt="Blanket" />
    <div className="blockbg">
      <div className="inblocktitle">КОВДРА</div>
      <div className="inblocktext">спальна кімната...</div>
      <div className="inblockprice">30$</div>
    </div>
  </div>

  <div className="itembox">
    <img src="/3.png" alt="Bed" />
    <div className="blockbg">
      <div className="inblocktitle">ЛІЖКО</div>
      <div className="inblocktext">спальна кімната...</div>
      <div className="inblockprice">414$</div>
    </div>
  </div>
</div>
<div className="topbox">
  <div className="top"> TOP
    </div>
    <div className="top"> TOP
    </div>
    <div className="top"> TOP
    </div>
    </div>

    <div className="discount-line">
  <span className="thin">ЛОВИ МОМЕНТ | </span>
  <span className="bold">Знижки до <span className="highlight">60%</span></span>
  <span className="thin"> на вибрані категорії товарів!</span>
</div>

  </div>
  
);

export default Bg;
