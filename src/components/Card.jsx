import styles from "../components/estilos/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.info}>
        <button onClick={() => onClose(id)} className={styles.buttonX}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img src={image} alt="" />
        <div className={styles.infoH2}>
          <h2>{id}</h2>
          <Link to={`/detail/${id}`}>
            <h2>Name:  {name}</h2>
          </Link>
        </div>

        {/* <h2>{"Status: " +status}</h2>
        <h2>{"Species: " +species}</h2>
        <h2>{"Gender: " +gender}</h2>
        <h2>{"Origin: " + origin}</h2> */}
      </div>
    </div>
  );
}
