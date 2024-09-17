import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target='blank'>
              <img src="/images/fb.png"/>
            </a>
          </li>
          <li>
            <a href="twitter.com" target='blank'>
              <img src="/images/tw.png"/>
            </a>
          </li>
          <li>
            <a href="instagram.com" target='blank'>
              <img src="/images/ig.png"/>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png"/>
      </section>
      <p>
        Desenvolvido por Lucas Menon :)
      </p>
    </footer>
  );
};

export default Footer;