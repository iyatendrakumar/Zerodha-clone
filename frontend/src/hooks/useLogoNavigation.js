import { useNavigate, useLocation } from "react-router-dom";

function useLogoNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Already on home → just scroll
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else {
      // Go to home
      navigate("/");
    }
  };

  return handleLogoClick;
}

export default useLogoNavigation;
