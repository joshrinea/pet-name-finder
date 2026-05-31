import type { NamesData } from "../interface/Names";

export const namesService = {
  async getNames(): Promise<NamesData> {
    const response = await fetch("/names.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch Names: ${response.status}`);
    }

    return response.json();
  },

//   async getNamesByGender(gender: string): Promise<NamesData> {
//     const response = await fetch("/names.json");

//     if (!response.ok) {
//         throw new Error(`Failed to fetch Names by Gender: ${response.status}`);

//         const data = response.json();

//         return data
//     }
//   }
};
