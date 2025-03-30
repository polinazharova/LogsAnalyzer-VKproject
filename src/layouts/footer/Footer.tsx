import "./Footer.styles.scss";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <p
        className="footer__info footer__info-contact"
        onClick={() => {
          window.open("https://t.me/polynatka", "_blank");
        }}
      >
        Created by Polina Zharova, 2025
      </p>
      <p className="footer__info">
        Non-commercial use. All rights belong to VK.
      </p>
    </footer>
  );
};

export default Footer;
