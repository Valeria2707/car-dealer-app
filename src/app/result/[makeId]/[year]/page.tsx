import { CURRENT_YEAR, START_YEAR } from '@/constants/date';
import { fetchMakes } from '@/services/makes';
import { fetchVehicle } from '@/services/vehicle';
import { generateYears } from '@/utils/date';
import VehicleModelsList from '@/components/VehicleModelsList';

type Props = {
  params: { makeId: string; year: string };
};

export async function generateStaticParams() {
  const makesData = await fetchMakes();

  const makeIds = makesData.map(make => make.MakeId);

  const years = generateYears(START_YEAR, CURRENT_YEAR);

  const paths = makeIds.flatMap((makeId: number) =>
    years.map(year => ({
      makeId: makeId.toString(),
      year: year.toString(),
    })),
  );

  return paths;
}

export default async function ResultPage({ params }: Props) {
  const { makeId, year } = params;
  const models = await fetchVehicle(makeId, year);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-r from-purple-100 via-blue-200 to-pink-100 flex flex-col items-center">
      {models.length > 0 ? (
        <div className="w-full max-w-4xl">
          <VehicleModelsList models={models} year={year} />
        </div>
      ) : (
        <div className="text-center text-gray-700 p-6">
          <p className="text-lg font-semibold mb-4">
            Unable to load vehicle models for the selected make and year.
          </p>
          <p className="text-gray-500">Please try again.</p>
        </div>
      )}
    </div>
  );
}
