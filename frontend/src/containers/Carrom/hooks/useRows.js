import { useMemo } from "react";

export default function useRows() {
  const rows = useMemo(
    () => [
      {
        players: "Yash",
        gp: 3,
        wins: 2,
        loose:  5,
      },
      {
        players: "Randomguy",
        gp: 4,
        wins: 2,
        loose:  3,
      },
      {
        players: "idk",
        gp: 2,
        wins: 1,
        loose:  6,
      },
      {
        players: "lets",
        gp: 1,
        wins: 1,
        loose:  6,
      },
      {
        players: "what",
        gp: 5,
        wins: 3,
        loose:  1,
      },
      {
        players: "ha",
        gp: 5,
        wins: 2,
        loose:  9,
      },
      {
        players: "bilkul",
        gp: 26,
        wins: 4,
        loose:  8,
      },
      {
        players: "sporty",
        gp: "3",
        wins: 3,
        loose:  7,
      },
      {
        players: "nope",
        gp: 2,
        wins: 2,
        loose:  2020,
      },
      {
        players: "status",
        gp: 6,
        wins: 2,
        loose:  8,
      },
      {
        players: "yes",
        gp: 3,
        wins: 2,
        loose:  9,
      },
      {
        players: "Yash",
        gp: 2,
        wins: 2,
        loose:  5,
      },
     
    ],
    []
  );

  return rows;
}
