import './bg.css';

export const Bg = () => (
  <div style={{ position: 'relative' }}>
    <img src="/bg.png" className="bg" alt="Background" />

    <div className="navbar">
  <div className="nav-left">
    <div className="burgerbox">
      <img src="/burger.png" className="icon" alt="Menu" />
      <div>Меню</div>
    </div>
    <img src="/logo.png" className="logo" alt="Logo" />
    <a href="#">Товари</a>
    <a href="#">Кімнати</a>
    <a href="#">Дизайн</a>
  </div>

  <div className="nav-right">
    <div className="nav-item">
      <img src="/location.png" className="icon" alt="Location" />
      <span>Київ</span>
    </div>
    <div className="nav-item">
      <img src="/user.png" className="icon" alt="User" />
      <span>Привіт! Увійдіть В Систему</span>
    </div>
    <div className="iconboxnav">
      <img src="/cart.png" className="icon" alt="Cart" />
      <img src="/like.png" className="icon" alt="Like" />
    </div>
  </div>
</div>

    <div className="title">все для дому</div>
<div className="searchbox">
    <div className="search">
      <div className="iconblock">
        <img src="/search.png" className="icon" alt="Search" />
        <span className="text">Пошук</span>
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
    <img src="/1.png" className="imgblock" alt="Pillow" />
    <div className="block">
      <div className="inblocktitle">ПОДУШКИ</div>
      <div className="inblocktext">спальна кімната...</div>
      <div className="inblockprice">12$</div>
    </div>
  </div>

  <div className="itembox">
    <img src="/2.png" className="imgblock" alt="Blanket" />
    <div className="block">
      <div className="inblocktitle">КОВДРА</div>
      <div className="inblocktext">спальна кімната...</div>
      <div className="inblockprice">30$</div>
    </div>
  </div>

  <div className="itembox">
    <img src="/3.png" className="imgblock" alt="Bed" />
    <div className="block">
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
