import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Players",
        accessor: "players",
      },
      {
        Header: "Games Played",
        accessor: "gp",
      },
      {
        Header: "Wins",
        accessor: "wins",
      },
      {
        Header: "Draws",
        accessor: "draws",
      },
      {
        Header: "Loose",
        accessor: "loose",
      },
      {
        Header: "Points",
        accessor: "points",
      },
    
      
    ],
    []
  );

  return columns;
}
