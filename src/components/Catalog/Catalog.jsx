import { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import CatalogItem from '../CatalogItem/CatalogItem';

import { item } from '../../data/item';

const Catalog = () => {
    const [product, setProduct] = useState(item);
  return (
   <div className="catalog">
       <div className="container">
           <div className="catalog_title">
                <h2 className="catalog-title">Каталог</h2>
                <img src={arrow} alt="" className="catalog-arrow" />
            </div>
            <form action="" className='search'>
                <input type="text" className='search-input' />
            </form>
            <div className="catalog_inner">
                {
                    product.map((categoryItem) => {
                        return (
                            <CatalogItem url={categoryItem.url} name={categoryItem.name} price={categoryItem.price} sale={categoryItem.sale}/>
                        )
                    })
                }
            </div>
       </div>
   </div>
  )
}

export default Catalog