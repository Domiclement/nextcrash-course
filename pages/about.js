import code from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <h1>about page</h1>
      <a className={code.a}>Coding is boring</a>
      <button className="contactbutton">Connect</button>
    </div>
  );
}
