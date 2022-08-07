import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766838.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
