import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27203503/pexels-photo-27203503/free-photo-of-cloudy-paradise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="placeholder"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>Post Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/27203503/pexels-photo-27203503/free-photo-of-cloudy-paradise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="placeholder"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author Name</span>
            <span className={styles.detailValue}>Kiran Patil</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam
          dignissimos error, neque atque vitae assumenda, nostrum nisi sunt enim
          ut illum quisquam distinctio ipsum veritatis tenetur officia dolore.
          Fugit.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
