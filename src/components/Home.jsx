import "../App.scss";
import "../styles/Home.scss";
import { overview, stats } from "./overviewContent";
import Images from "./Images";




const Card = ({img, title, content}) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const Home = () => {
  const overviewComponents = overview.map((value, Index) => {
    return (
      <Card
        key={Index}
        {...value}
      />
    );
  });
  const companyImages = Object.values(Images());
  const Components = companyImages.map((value, Index) => {
    return <img key={Index} className="companyLogo" src={value.path}  />;
  });

  const statsComponents = stats.map((value, Index) => {
    return (
      <div key={Index}>
        <div className="statComponent">
          <img src={value.logo} alt={`${value.about}`} />
          <h2>{`${value.stat} ${value.unit}+`}</h2>
          <p>{value.about}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="coverImage"></div>
      <div className="Headline">
        <p>DIGITAL MARKETING AGENCY</p>
        <h1>WE MAKE SMALL</h1>
        <h1>
          BUSINESSES <span>BIG</span>
        </h1>
        <div className="bottomLine"></div>
        <p id="statement">
          We are “In the business of enhancing business”, for our customers.
        </p>
      </div>
      <div className="overview">
        <h2>What We Do</h2>
        <div className="bottomLine"></div>
        <div className="overview-main">
          <div>
            <p>
              We <span>FOCUS</span> on empowering businesses digitally
            </p>
            <p
              style={{
                fontSize: "1.2em",
                fontWeight: "normal",
                marginTop: "2em",
                color: "gray",
              }}
            >
              We have expertise in providing custom-made solutions to Education,
              Automobiles, Real Estate, and all other sectors.
            </p>
          </div>
          <div className="grid">{overviewComponents}</div>
        </div>
      </div>
      <div className="trusted">
        <h2>Trusted By</h2>
        <div className="bottomLine"></div>
      </div>
      <div className="companies">{Components}</div>

      <div className="stats">{statsComponents}</div>

      <div className="contactForm" style={{padding: '1.5em'}}>
        <p>CONTACT FORM</p>
        <form action="">
          <div>
            <input type="text" placeholder="Your Name*" required />
            <input type="text" placeholder="Company Name*" required />
          </div>
          <div>
            <input type="email" placeholder="Office Email*" required />
            <input type="tel" placeholder="Phone Number*" required />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default Home;
