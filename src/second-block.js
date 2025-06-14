import './second-block.css';
import React from 'react';
import { Title } from './title';

const SecondBlock = () => {
  return (
    <div className="blocksecond">

      <Title text ="ЗНАЙДИ ТЕ, ЩО ШУКАЄШ!"></Title>
      <div className="imgblocksecond">
<div className="imgwrapper">
  <img src="/image1.png" />
  <div className="textblocksecond">НАША НОВА КОЛЛЕКЦІЯ</div>
</div>

<div className="imgwrapper">
  <img src="/image2.png" />
  <div className="textblocksecond">НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ</div>
</div>

</div>
<div className="imgwrapper">
  <img src="/image3.png" />
  <div className="textblocksecond">НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ</div>
</div>
      
      <Title text ="рекомендації"></Title>
      <div className="recblock">

        <div className="imgwrapper">
  <img src="/col1.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

   
        <div className="imgwrapper">
  <img src="/col2.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col3.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col4.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col5.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col6.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

      </div>

       <Title text ="найкращі набори"></Title>
      <div className="recblock">

        <div className="imgwrapper">
  <img src="/col7.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

   
        <div className="imgwrapper">
  <img src="/col8.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col9.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col10.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col11.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

        <div className="imgwrapper">
  <img src="/col12.jpg" />
  <div className="recblocktext">назва набору</div>
</div>

      </div>

      <Title text ="новинки"></Title>
      <dib className = "gridnew">
        
      <div className = "imgblocknew1">
          <img src="/new2.jpg" />
          <img src="/new4.jpg" />

      </div>
       <div className = "imgblocknew2">
          <img src="/new3.jpg" />
          <img src="/new1.jpg" />

      </div>
      </dib>

    </div>
  );
};

export default SecondBlock;
