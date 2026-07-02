import { create } from "zustand";

interface ScenarioState {
  activeScenarioId: string; // "0" represents default production timeline, other values represent alternate sandboxes
  activeTick: number;
  setActiveScenarioId: (id: string) => void;
  setActiveTick: (tick: number) => void;
  resetScenario: () => void;
}

export const useScenarioStore = create<ScenarioState>((set) => ({
  activeScenarioId: "0",
  activeTick: 0,
  setActiveScenarioId: (id) => set({ activeScenarioId: id }),
  setActiveTick: (tick) => set({ activeTick: tick }),
  resetScenario: () => set({ activeScenarioId: "0", activeTick: 0 }),
}));
