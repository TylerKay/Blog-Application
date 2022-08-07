import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./aboutSection.css";

export default function AboutSection() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="aboutSection">
      <div className="aboutSectionItem">
        <span className="aboutSectionTitle">About me</span>
        <img
          src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fuga iusto numquam nostrum iste. Amet error voluptate labore iusto.
          Quos omnis soluta ex accusamus obcaecati iusto impedit deleniti
          voluptatum iure.
        </p>
      </div>
      <div className="aboutSectionItem">
        <span className="aboutSectionTitle">Categories</span>
        <ul className="aboutSectionList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="aboutSectionListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="aboutSectionItem">
        <span className="aboutSectionTitle">Follow Us</span>
        <div className="aboutSectionSocial">
          <i className="aboutSectionIcon fa-brands fa-facebook-square"></i>
          <i className="aboutSectionIcon fa-brands fa-twitter-square"></i>
          <i className="aboutSectionIcon fa-brands fa-pinterest-square"></i>
          <i className="aboutSectionIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
