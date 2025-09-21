import Link from "next/link";

export type SeasonNavProps = {
  seasonName: string;
  year: number;
};

export default function SeasonNav() {
  const seasons = [
    { seasonName: "winter", year: 2025 },
    { seasonName: "spring", year: 2024 },
    { seasonName: "summer", year: 2024 },
    { seasonName: "fall", year: 2024 },
  ];

  return (
    <ul>
      {seasons.map((season, id) => (
        <li key={id} className="bg-indigo-500">
          <Link href={`${season.seasonName}${season.year}`}>
            <p className="p-5 text-center capitalize hover:bg-indigo-700">
              <span>{season.seasonName}</span> <span>{season.year}</span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
