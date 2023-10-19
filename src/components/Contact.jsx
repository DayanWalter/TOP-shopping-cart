import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Get in Contact with Us!</p>
        <br />
        <p>TechSolutions Inc.</p>
        <p>E-Mail: contact@techsolutions.com</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Address: 123 Main Street, Anytown, CA 56789, USA</p>
      </div>
    </div>
  );
}
