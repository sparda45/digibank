import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Dapatkan penawaran kartu yang lebih baik <br className="sm:block hidden" /> dalam beberapa
        langkah saja.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Anda akan mendapatkan penawaran kartu yang jauh lebih baik,
         hanya dengan beberapa langkah yang mudah dan tidak sulit. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
