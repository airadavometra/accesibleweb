import { Filter } from "@/types/filter";
import { create } from "zustand";

type ChallengeStore = {
  filter?: Filter;
  startTime?: Date;
  setFilter: (filter?: Filter) => void;
  setStartTime: (startTime?: Date) => void;
};

export const useChallengeStore = create<ChallengeStore>()((set) => ({
  filter: undefined,
  startTime: undefined,
  setFilter: (filter) => set(() => ({ filter: filter })),
  setStartTime: (startTime) => set(() => ({ startTime: startTime })),
}));
