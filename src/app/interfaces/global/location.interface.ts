import { Info } from "../info.interface";
import { LocationResults } from "../results/locationResult.interface";

export interface Location {
    info: Info;
    results: LocationResults[];
}