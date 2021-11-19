import { Track } from "./track";

export interface Album {
    name: string;
    releaseDate: string;
    coverImgae: string;
    tracks: Track[];
}
