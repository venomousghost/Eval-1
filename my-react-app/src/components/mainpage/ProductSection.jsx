import React from 'react';

function ProductCard({ image, title, price }) {
  return (
    <div className="product-cart">
      <img src={image} alt={`${title} image`} />
      <span>{title}</span>
      <h4 className="price">${price}</h4>
      <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
    </div>
  );
}

function ProductSection() {
  const products = [
    {
      image: "https://store-images.s-microsoft.com/image/apps.29799.14582624973508592.2000000000007863648.c6853463-3ddd-4434-ba48-0661d492be61",
      title: "Forza Horizon 4",
      price: 78,
    },
    {
      image: "https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a",
      title: "Mortal Kombat",
      price: 78,
    },
    {
      image: "https://store-images.s-microsoft.com/image/apps.20532.67345955710459827.6770a7a0-cc7f-4a09-ae17-dc0da389809a.f565a0bf-8bf9-4648-a658-b93b7a09fa69",
      title: "Tomb Raider",
      price: 78,
    },
    {
      image: "https://store-images.s-microsoft.com/image/apps.9561.69766501749678274.825421a3-6e90-4af8-a717-6375f4b1f802.ce79e4cd-489f-48ea-b7da-b546860070ed",
      title: "Tekken 7",
      price: 78,
    },
    {
      image: "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png?h=480&quality=medium&resize=1&w=360",
      title: "Black Myth Wukong",
      price: 78,
    },
    {
      image: "https://cdn1.epicgames.com/offer/2c42520d342a46d7a6e0cfa77b4715de/EGS_DyingLightStandardEdition_Techland_Editions_S2_1200x1600-49546d7deaaf160596e034613a2d2a93?h=480&quality=medium&resize=1&w=360",
      title: "Dying Light",
      price: 78,
    },
    {
      image: "https://cdn1.epicgames.com/offer/9c1a74145a9145ec803d7452e80819a0/EGS_Fallout4_BethesdaGameStudios_S2_1200x1600-2b307b78180f2a6a2dc89ab1c20b3c1b?h=480&quality=medium&resize=1&w=360",
      title: "Fallout 4",
      price: 78,
    },
    {
      image: "https://cdn1.epicgames.com/offer/6e6aa039c73347b885803de65ac5d3db/EGS_GhostofTsushima_SuckerPunchProductions_S2_1200x1600-e23e02c1d70be7b528dba50860f87d39?h=480&quality=medium&resize=1&w=360",
      title: "Ghost of Tsushima",
      price: 78,
    },
  ];

  return (
    <section className="product-section section-p1">
      <div className="pro-collection">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <div className="pro-collection">
        {products.slice(4).map((product, index) => (
          <ProductCard
            key={index + 4}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
