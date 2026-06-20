import "./sitefooter.css";

const SiteFooter = () => {
  return (
    <footer className="gridWrapper">
      <div className="small">
        Copyright {new Date().getFullYear()} Video Store Day. All rights reserved, all wrongs reversed. Long live physical media!
      </div>
    </footer>
  );
};

export default SiteFooter;