import { MediaFile } from "./media-file";

export interface FolderStructure {
    id: string;
    name: string;
    folderPath: string;
    media: MediaFile[];
    subfolders: FolderStructure[];
}
