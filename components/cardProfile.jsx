import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import styles from "../styles/Home.module.css";

// Card profile
export default function CardProfile() {
  return (
    <Card className={styles.card}>
      <div className={styles.cardUp}></div>
      <div className={styles.cardMiddle}>
        <h1 className={styles.name}>
          {" "}
          Victor Crest <span>26</span>{" "}
        </h1>

        <p>London</p>
      </div>
      <div className={styles.cardDown}>
        <div>
          {" "}
          <p className={styles.status}>80K</p> <p>Followers</p>{" "}
        </div>
        <div>
          {" "}
          <p className={styles.status}>803K</p> <p>Likes</p>{" "}
        </div>
        <div>
          {" "}
          <p className={styles.status}>1.4K</p> <p>Photos</p>{" "}
        </div>
      </div>
      <Avatar
        className={styles.avatar}
        alt="User Photo"
        src="/image-victor.jpg"
        sx={{ width: 102, height: 102 }}
      />
    </Card>
  );
}
