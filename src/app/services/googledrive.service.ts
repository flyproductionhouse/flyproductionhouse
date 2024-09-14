import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gapi } from 'gapi-script';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { FolderStructure } from '../interfaces/folder-structure';
import { MediaFile } from '../interfaces/media-file';

@Injectable({
  providedIn: 'root'
})
export class GoogledriveService {

  private API_KEY = 'AIzaSyA7UIYBsXcWYn8fUD-0YGvjCHlKhQdMcOc'; // Replace with your API key
  private CLIENT_ID = '727968704540-t8iten98r6utfl86o5o53bg5ol3i803a.apps.googleusercontent.com'; // Replace with your Client ID
  private clientKey = "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";
  private DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  private SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
  // private accessToken: string | undefined;

  constructor(private http: HttpClient) { }

  // Method to get files from a specific folder
  getFilesFromFolder(folderId: string): Observable<any[]> {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${this.API_KEY}&fields=files(id,name,mimeType,webViewLink)`;
    return this.http.get(url).pipe(
      map((data: any) => data.files)
    );
  }

  // Recursive method to get all images and videos from a folder and its subfolders
  getAllMediaFromFolder(folderId: string, folderPath: string = ''): Observable<FolderStructure> {
    return this.getFilesFromFolder(folderId).pipe(
      switchMap(files => {
        const mediaFiles: MediaFile[] = files.filter(file => 
          file.mimeType.startsWith('image/') || file.mimeType.startsWith('video/')
        );

        // Get all subfolder IDs
        const subfolderIds = files
          .filter(file => file.mimeType === 'application/vnd.google-apps.folder')
          .map(folder => folder.id);

        // Create an object to hold the folder structure
        const folderName = files.find(file => file.id === folderId)?.name || 'Unknown Folder';
        const currentFolderPath = folderPath ? `${folderPath} > ${folderName}` : folderName;

        const folderStructure: FolderStructure = {
          id: folderId,
          name: folderName,
          folderPath: currentFolderPath,
          media: mediaFiles,
          subfolders: []
        };

        // If there are no subfolders, return the folder structure
        if (subfolderIds.length === 0) {
          return [folderStructure];
        }

        // Create an array of observables for each subfolder
        const subfolderObservables = subfolderIds.map(id => this.getAllMediaFromFolder(id, currentFolderPath));

        // Combine all observables and return the result
        return forkJoin(subfolderObservables).pipe(
          map(results => {
            folderStructure.subfolders = results;
            return folderStructure;
          })
        );
      })
    );
  }
}
