import { site } from "@/lib/site";

export default function Nav() {
  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <a className="nav-name" href="#top">
          <span className="nav-mark" aria-hidden="true">{site.name.charAt(0)}</span>
          {site.name}
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="btn btn-dark btn-sm" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
