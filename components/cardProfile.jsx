import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import styles from "../styles/Home.module.css";

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
          <h5>80K</h5> <p>Followers</p>{" "}
        </div>
        <div>
          {" "}
          <h5>803K</h5> <p>Likes</p>{" "}
        </div>
        <div>
          {" "}
          <h5>1.4K</h5> <p>Photos</p>{" "}
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
