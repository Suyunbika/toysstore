const CatalogItem = ({ url, name, price, sale}) => {
  return (
    <div className="catalog-item">
        <img src={url} alt="" className="catalog-item-img" />
        <div className="catalog-item-info">
            <h2 className="catalog-item-name">{name}</h2>
            <div className="price-info">
                <p className="catalog-item-price">{price}</p>
                <p className="catalog-item-sale">{sale}</p>
            </div>
            
        </div>
    </div>
  )
}

export default CatalogItem