import "./footer.scss";

const Footer = () => (
  <div className="tb-color-bg--black tb-padding--h-12">
    <div className="tb-padding--8"></div>
    <footer>
      <p className="tb-typo--body1 tb-color--grey-500">Sample Footer</p>
      <p className="tb-typo--body1 tb-color--grey-500">
        Contact information:{" "}
        <a className="tb-color--white" href="mailto:someone@example.com">
          someone@example.com
        </a>
        .
      </p>
    </footer>
    <div className="tb-padding--8"></div>
  </div>
);

export default Footer;
