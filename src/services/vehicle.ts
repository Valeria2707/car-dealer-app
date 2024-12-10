import { BASE_URL } from '@/constants/url';
import { Vehicle } from '@/types/vehicle';

export const fetchVehicle = async (
  makeId: string,
  year: string,
): Promise<Vehicle[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch vehicle models: ${response.status}`);
    }

    const data = await response.json();
    return data.Results || [];
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    return [];
  }
};
