import React from 'react';
import { Vehicle } from '@/types/vehicle';

type Props = {
  models: Vehicle[];
  year: string;
};

export default function VehicleModelsList({ models, year }: Props) {
  const firstModelName = models[0].Make_Name;

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-extrabold text-center text-indigo-800 mb-8">
        Vehicle Models: for Make {firstModelName} , Year {year}
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map(model => (
          <li
            key={model.Model_ID}
            className="border border-gray-200 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-200"
          >
            <h2 className="text-lg font-semibold text-gray-700">
              {model.Model_Name}
            </h2>
            <p className="text-sm text-gray-500">Model ID: {model.Model_ID}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
