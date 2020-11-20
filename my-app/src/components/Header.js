import React from "react";
import { Carousel } from "rsuite";
import styles from "./Header.js";
import "rsuite/dist/styles/rsuite-default.css";

class HeaderCarousel extends React.Component {
  render() {
    return (
      <Carousel
        autoplay
        className="custom-slider"
        className={styles.Carousel}
        style={{ height: "80vh" }}
      >
        <img
          className={styles.imageCarousel}
          src="https://mshanken.imgix.net/wso/Articles/2018/MC_Prohibition120518_1600.jpg"
          alt=""
        />
        <img
          className={styles.imageCarousel}
          src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1346,w_2400,x_0,y_86/f_auto,q_auto,w_1100/v1554736245/shape/mentalfloss/54076-gettyimages-3202953.jpg"
          alt=""
        />
        <img
          className={styles.imageCarousel}
          src="https://cdn.hswstatic.com/gif/prohibition-update.jpg"
          alt=""
        />
        <img
          className={styles.imageCarousel}
          src="https://api.time.com/wp-content/uploads/2014/12/1933.jpeg?quality=85&w=1024&h=512&crop=1"
          alt=""
        />
        <img
          className={styles.imageCarousel}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/prohibitionlead-1579289071.jpg"
          alt=""
        />
      </Carousel>
    );
  }
}

export default HeaderCarousel;
