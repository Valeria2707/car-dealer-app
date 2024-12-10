'use client';

import { useState } from 'react';
import { Make } from '@/types/make';
import { useRouter } from 'next/navigation';
import { CURRENT_YEAR, START_YEAR } from '@/constants/date';
import { generateYears } from '@/utils/date';
import ErrorMessage from './ErrorMessage';
import SelectField from './SelectField';
import useApi from '@/hooks/useApi';
import { BASE_URL } from '@/constants/url';

export default function FilterFormContent() {
  const router = useRouter();
  const { data, error } = useApi<{ Results: Make[] }>(
    `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
  );

  const [filter, setFilter] = useState<{ make: string; year: string }>({
    make: '',
    year: '',
  });

  const makes = (data?.Results || []).map(make => ({
    value: make.MakeId.toString(),
    label: make.MakeName,
  }));

  const years = generateYears(START_YEAR, CURRENT_YEAR).map(year => ({
    value: year,
    label: year,
  }));

  const isButtonDisabled = !filter.make || !filter.year;

  const handleFilterChange = (key: keyof typeof filter, value: string) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  const handleRedirectToResultPage = () =>
    router.push(`/result/${filter.make}/${filter.year}`);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-green-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-center text-indigo-800 mb-8">
          Select Your Car
        </h1>
        {error && (
          <ErrorMessage message="Failed to load vehicle makes. Please try again later." />
        )}
        <SelectField
          label="Vehicle Make"
          options={makes}
          value={filter.make}
          onChange={value => handleFilterChange('make', value)}
          disabled={!!error}
        />
        <SelectField
          label="Model Year"
          options={years}
          value={filter.year}
          onChange={value => handleFilterChange('year', value)}
        />
        <div className="flex justify-center mt-6">
          <button
            className={`w-40 py-3 rounded-xl text-white font-bold shadow-md transition-all ${
              isButtonDisabled
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-300 hover:bg-blue-500 transform hover:scale-105'
            }`}
            disabled={isButtonDisabled || !!error}
            onClick={handleRedirectToResultPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
