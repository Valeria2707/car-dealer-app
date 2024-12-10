import { BASE_URL } from '@/constants/url';
import { Make } from '@/types/make';

export const fetchMakes = async (): Promise<Make[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch makes: ${response.status}`);
    }

    const data = await response.json();
    return data.Results.map((make: Make) => ({
      MakeId: make.MakeId,
      MakeName: make.MakeName,
    }));
  } catch (error) {
    console.error('Error fetching makes:', error);
    return [];
  }
};
