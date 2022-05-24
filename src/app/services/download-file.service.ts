import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { ExportFileResponse, ExportFileService } from './exportfile.service';
import { httpError } from '../operators/http-error-operator';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(
    private http: HttpClient,
    private exportFileService: ExportFileService
  ) { }
  createReportContent(request: any): Observable<any> {
    return this.http
      .post(environment.downloadAuditTrailsUrl, request, {
        headers: {
          Accept: 'text/csv',
        },
        observe: 'response',
        responseType: 'blob',
      })
      .pipe(
        map((response: ExportFileResponse) =>
          this.exportFileService.resolveResponseToExportFile(response)
        ),
        httpError()
        // TODO: redo this to not rely on casting but on type inference
      ) as Observable<any>;
  }
}