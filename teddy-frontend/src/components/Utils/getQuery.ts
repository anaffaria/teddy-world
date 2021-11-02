import { useLocation } from "react-router";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
