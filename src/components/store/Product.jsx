// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "../../css/products.css";
// import { Pagination } from "swiper/modules";
// // import Heart from "../icons/Heart";
// // import Star from "../icons/Star";
// // import Comment from "../icons/Comment";
// // import Share from "../icons/Share";

// const Product = ({ images, name, selected, onClick }) => {
//   return (
//     <motion.div
//       layout
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//       className={`productContainer ${selected ? "selected" : ""}`}
//       onClick={onClick}
//     >
//       <div className="productImage" 
//        style={{ backgroundImage: `url(${images[0]})` }}>
//         <Swiper
//           spaceBetween={0}
//           slidesPerView={1}
//         >
//           {images.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <img className="img" src={img} alt={`${name}-${idx}`} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* <div className="starPosition" onClick={(e) => e.stopPropagation()}>
//           <Star />
//         </div> */}
//       </div>
//       <div className="productInfo">
//         {/* <div onClick={(e) => e.stopPropagation()} className="iconsRow">
//           <Heart />
//           <Comment />
//           <Share />
//         </div> */}

//         <p className="productName"><span className="falley-name">felly:</span>{name}</p>
        
//       </div>
//     </motion.div>
//   );
// };

// export default Product;



import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../css/products.css";
import { Pagination } from "swiper/modules";
import { useState } from "react";

const Product = ({ images, name, selected, onClick }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`productContainer ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div
        className="productImage"
        style={{ backgroundImage: `url(${activeImage})` }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveImage(images[swiper.activeIndex])}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img className="img" src={img} alt={`${name}-${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="productInfo">
        <p className="productName">
          <span className="falley-name">felly:</span>
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default Product;
