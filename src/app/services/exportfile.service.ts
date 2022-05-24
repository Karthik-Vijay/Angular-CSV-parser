import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExportFile } from '../models/export-file';

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {
  private static readonly CONTENT_DISPOSITION_HEADER = 'content-disposition';

  /**
   * Resolves the export file from the given export file response.
   * The response should contain the filename in a content-disposition header. The data should be in a Blob format.
   *
   * @param response The received http response containing the export data.
   * @returns The extracted export file with a filename.
   */
  resolveResponseToExportFile(response: ExportFileResponse): ExportFile {
    const filename = this.extractFilenameFromHeader(
      response.headers[ExportFileService.CONTENT_DISPOSITION_HEADER]
    );
    return { filename, data: response.data };
  }

  private extractFilenameFromHeader(header: string): string {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(header);
    if (matches && matches[1]) {
      const filename = matches[1].replace(/['"]/g, '');
      return filename;
    }
    return '';
  }
}

export interface ExportFileResponse extends HttpResponse<Blob> {
  data: Blob;
}