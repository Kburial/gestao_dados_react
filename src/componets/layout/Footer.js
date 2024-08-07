import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

//CSS
import styles from './Footer.module.css'
function Footer() {
   return (
      <footer className={styles.footer}>
         <ul className={styles.social_list}>
          <li><FaFacebook /></li>  
          <li><FaGithub /></li>
          <li><FaInstagram /></li>
          <li><FaLinkedin /></li>
         </ul>

         <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2024
         </p>
      </footer>
   )

}

export default Footer