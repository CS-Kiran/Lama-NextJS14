import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src='https://images.pexels.com/photos/10928747/pexels-photo-10928747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="post" fill className={styles.img}/>
            </div>
            <span className={styles.date}>01.03.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, arcu nec viverra consectetur, risus urna pretium massa, et consectetur metus velit at ipsum.</p>
            <Link href='/blog/post' className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard