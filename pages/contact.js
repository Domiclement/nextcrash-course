import ndc from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <h1>All Contacts</h1>
      <button className="button">My contacts</button>
      <button className={ndc.button}>My contacts</button>
    </div>
  );
}
