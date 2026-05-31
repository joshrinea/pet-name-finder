import type { Data } from "./Data";
import type { FilterGroup } from "./FilterGroup";

export interface Categories {
  data: Data[];
  filterGroups: FilterGroup[];
}
