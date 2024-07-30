import Image from 'next/image'
import styles from './contact.module.css'

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname'/>
          <input type="email" placeholder='EmailAddress'/>
          <input type="tel" placeholder='Phone Number {Optional}'/>
          <textarea cols='30' rows='10' placeholder='Your Message'/>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage