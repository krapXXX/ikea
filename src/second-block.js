import './second-block.css';
import React from 'react';
import { Title } from './title';
import { Name } from './name';
import { Arrow } from './arrow';

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
  <Name bottom ="33px"></Name>
</div>

   
        <div className="imgwrapper">
  <img src="/col2.jpg" />
  <Name bottom ="33px"></Name>

</div>

        <div className="imgwrapper">
  <img src="/col3.jpg" />
  <Name bottom ="33px"></Name>

</div>

        <div className="imgwrapper">
  <img src="/col4.jpg" />
  <Name bottom ="33px"></Name>

</div>

        <div className="imgwrapper">
  <img src="/col5.jpg" />
  <Name bottom ="33px"></Name>

</div>

        <div className="imgwrapper">
  <img src="/col6.jpg" />
  <Name bottom ="33px"></Name>

</div>

      </div>

       <Title text ="найкращі набори"></Title>
      <div className="recblock">

        <div className="imgwrapper">
  <img src="/col7.jpg" />
  <Name bottom ="33px"></Name>


</div>

   
        <div className="imgwrapper">
  <img src="/col8.jpg" />
  <Name bottom ="33px"></Name>
</div>

        <div className="imgwrapper">
  <img src="/col9.jpg" />
  <Name bottom ="33px"></Name>
</div>

        <div className="imgwrapper">
  <img src="/col10.jpg" />
  <Name bottom ="33px"></Name>
</div>

        <div className="imgwrapper">
  <img src="/col11.jpg" />
  <Name bottom ="33px"></Name>
</div>

        <div className="imgwrapper">
  <img src="/col12.jpg" />
  <Name bottom ="33px"></Name>
</div>

      </div>

      <Title text ="новинки"></Title>
      <div className = "gridnew">
        
      <div className = "imgblocknew1">
          <img src="/new2.jpg" />
          <img src="/new4.jpg" />

      </div>
       <div className = "imgblocknew2">
          <img src="/new3.jpg" />
          <img src="/new1.jpg" />

      </div>

      </div>

 <Title text ="каталог"></Title>

 <div className="gridcatalogue">
  <div className="gridcatalogueitem">
    <img src="/cat1.png" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat2.png" alt="catalogue item" />
    <Name pos = "none"></Name>


  </div>

  <div className="gridcatalogueitem">
    <img src="/cat3.png" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat4.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat5.png" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat6.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat7.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat8.png" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat9.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat10.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat11.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat12.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat13.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat14.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat15.png" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat16.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat17.jpg" alt="catalogue item" />
    <Name pos = "none"></Name>
  </div>

  <div className="gridcatalogueitem">
    <img src="/cat18.png" alt="catalogue item" />
    <Name pos = "none" ></Name>
  </div>
</div>
<Title text ="ідеї для оформлення"></Title>

<div className="ideasname">
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
</div>

<div className="ideasgrid">

  <div className="ideasgrid1">
    <div className="image-wrapper">
      <img src="/idea1.jpg" alt="idea1" />
      <Arrow />
    </div>
    <div className="image-wrapper">
      <img src="/idea4.jpg" alt="idea4" />
      <Arrow />
    </div>
  </div>

  <div className="ideasgrid2">
    <div className="image-wrapper">
      <img src="/idea2.jpg" alt="idea2" />
      <Arrow />
    </div>
    <div className="image-wrapper">
      <img src="/idea5.jpg" alt="idea5" />
      <Arrow />
    </div>
  </div>

  <div className="ideasgrid1">
    <div className="image-wrapper">
      <img src="/idea3.jpg" alt="idea3" />
      <Arrow />
    </div>
    <div className="image-wrapper">
      <img src="/idea6.jpg" alt="idea6" />
      <Arrow />
    </div>
  </div>

</div>

<div className="ideasname" style={{marginTop: "-570px"}}>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
<div className = "nameideas">Назва набору</div>
</div>
    </div>
  );
};

export default SecondBlock;