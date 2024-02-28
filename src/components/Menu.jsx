import { Link } from "react-router-dom";

function NavLink({ to, label, ariaLabel }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link" aria-label={ariaLabel}>
        {label}
      </Link>
    </li>
  );
}

export default function Menu({ className }) {
  const navLinks = [
    {
      to: "/",
      label: "Home",
      ariaLabel: "Navigate to the Home Page",
    },
    {
      to: "/CityPage",
      label: "Cities",
      ariaLabel: "Navigate to the Cities Page",
    },
    {
      to: "/AboutPage",
      label: "About",
      ariaLabel: "Navigate to the About Page",
    },
    {
      to: "/TipsPage",
      label: "Tips",
      ariaLabel: "Navigate to the Tips Page",
    },
  ];

  return (
    <ul className={className}>
      {navLinks.map(({ to, ariaLabel, label }) => (
        <NavLink key={to} to={to} ariaLabel={ariaLabel} label={label} />
      ))}
    </ul>
  );
}