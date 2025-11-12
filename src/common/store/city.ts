import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ICity } from "../types/city.type";

interface cityState {
    city: ICity;
    setCity: (city: ICity) => void;

	opened_modal: boolean;
	setOpenedModal: (opened_modal: boolean) => void;
}

export const useCityStore = create<cityState>()(persist((set, get) => ({
		city: {
			id: 1,
			name: "Москва",
			countryId: 1,
		},
		setCity: (city: ICity) => set({ city }),

		opened_modal: false,
		setOpenedModal: (opened_modal: boolean) => set({ opened_modal }),
	}),
	{
		name: "city",
		storage: createJSONStorage(() => localStorage),
	}
));
