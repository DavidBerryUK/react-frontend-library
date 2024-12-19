import { useNavigate } from "react-router-dom";
import EnumRoutes from "./EnumRoutes";

/**
 * Helper for navigation functions to navigate around the app.
 * This ensures consistant navigation,
 * Parameters can be added for pages, filters and other values.
 * Url's are generated within this function, consistantly
 
 */
const useAppNavigation = () => {
  const navigate = useNavigate();
  const gotoHomePage = () => {
    performNavigation(EnumRoutes.HomePage);
  };

  //
  // do the actual work
  //
  const performNavigation = (location: string, delayed?: boolean) => {
    navigate(location);
  };

  return {
    gotoHomePage,
  };
};

export default useAppNavigation;
