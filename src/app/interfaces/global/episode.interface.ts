import { Info } from "../info.interface";
import { EpisodeResults } from "../results/episodeResults.interface";

export interface Episode {
    info:Info,
    results: EpisodeResults[]

}