
import { useState } from "react";
import "../../css/products.css";
import Product from "./Product";
import anothersomeone1 from "../../assets/iloveimg-resized/anothersomeone1.jpeg";
import Andi1 from "../../assets/iloveimg-resized/andi1.jpeg";
import Andi2 from "../../assets/iloveimg-resized/andi2.jpeg";

import brown1 from "../../assets/iloveimg-resized/brown1.jpeg";
import brown2 from "../../assets/iloveimg-resized/brown2.jpeg";
import brown3 from "../../assets/iloveimg-resized/brown3.jpeg";
import brown4 from "../../assets/iloveimg-resized/brown4.jpeg";
import brown5 from "../../assets/iloveimg-resized/brown5.jpeg";

import copelshirts from "../../assets/iloveimg-resized/copelshirts.jpeg";
import lonor1 from "../../assets/iloveimg-resized/lonor1.jpeg";


import moran1 from "../../assets/iloveimg-resized/moran1.jpeg";
import moran2 from "../../assets/iloveimg-resized/moran2.jpeg";
import moran3 from "../../assets/iloveimg-resized/moran3.jpeg";
import moran5 from "../../assets/iloveimg-resized/moran5.jpeg";
import moran6 from "../../assets/iloveimg-resized/moran6.jpeg";

import moranandbrown from "../../assets/iloveimg-resized/moranandbrown.jpeg";

import moranbackwhite from "../../assets/iloveimg-resized/moranbackwhite.jpeg";
import morandown1 from "../../assets/iloveimg-resized/morandown1.jpeg";


import morantopwhite from "../../assets/iloveimg-resized/morantopwhite.jpeg";
import moranwhitedown from "../../assets/iloveimg-resized/moranwhitedown.jpeg";


import purple from "../../assets/iloveimg-resized/purple.jpeg";
import purple2 from "../../assets/iloveimg-resized/purple2.jpeg";

import Stas1 from "../../assets/iloveimg-resized/stas1.jpeg";
import Stas2 from "../../assets/iloveimg-resized/stas2.jpeg";


import tova1 from "../../assets/iloveimg-resized/tova1.jpeg";
import tovamoran from "../../assets/iloveimg-resized/tovamoran.jpeg";



const products = [
  { id: 1, name: "Product 1", images: [Stas1, Stas2] },
  { id: 2, name: "Product 2", images: [Andi1, Andi2] },
  { id: 3, name: "Product 3", images: [anothersomeone1] },
  { id: 4, name: "Product 4", images: [brown1, brown2,brown3,brown4,brown5] },

  { id: 5, name: "Product 5", images: [copelshirts] },

  { id: 6, name: "Product 6", images: [lonor1] },
  { id: 7, name: "Product 7", images: [moran1, moran2,moran3,moran5,moran6] },

  { id: 8, name: "Product 8", images: [moranandbrown] },


  { id: 9, name: "Product 9", images: [moranbackwhite, morandown1,morantopwhite,moranwhitedown] },
  { id: 10, name: "Product 10", images: [purple, purple2] },

    { id: 11, name: "Product 11", images: [Stas1, Stas2] },
    { id: 12, name: "Product 11", images: [tova1, tovamoran] },

];

const ProductsList = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <div className="productListContainer">
      {products.map((product) => (
        <Product
          key={product.id}
          images={product.images}
          name={product.name}
          selected={selectedProductId === product.id}
          onClick={() =>
            setSelectedProductId(
              selectedProductId === product.id ? null : product.id
            )
          }
        />
      ))}
    </div>
  );
};

export default ProductsList;
