import { NavLink } from "react-router-dom";

const routes = [
  {
    url: "/",
    anchor: "Home",
  },
  {
    url: "/memo",
    anchor: "Memo",
  },
  {
    url: "/use-memo",
    anchor: "useMemo",
  },
  {
    url: "/use-callback",
    anchor: "useCallback",
  },
];

export const Nav = () => {
  return (
    <nav>
      {routes.map(({ url, anchor }) => {
        return (
          <NavLink
            key={url}
            to={url}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {anchor}
          </NavLink>
        );
      })}
    </nav>
  );
};
