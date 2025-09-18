export type SeasonNavProps = {
  seasonName: String;
  year: Number;
};

export default function SeasonNav() {
  const seasons = [
    { seasonName: "winter", year: 2025 },
    { seasonName: "spring", year: 2024 },
    { seasonName: "summer", year: 2024 },
    { seasonName: "fall", year: 2024 },
  ];

  return (
    <ul className="md:flex md:flex-row md:justify-between">
      {seasons.map((season) => (
        <li className="md:mx-4">{`${season.seasonName} ${season.year}`}</li>
      ))}
    </ul>
  );
}
