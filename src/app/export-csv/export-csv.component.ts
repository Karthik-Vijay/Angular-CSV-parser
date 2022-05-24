import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DownloadFileService } from "../services/download-file.service";
import { saveAs } from 'file-saver';
import { ExportFile } from "../models/export-file";

@Component({
  selector: "app-export-csv",
  templateUrl: "./export-csv.component.html",
  styleUrls: ["./export-csv.component.scss"],
})
export class ExportCsvComponent implements OnInit {

  searchItems = {
    pageNumber: 1,
    data: [],
    excludeKeys: "N",
    action: "ALL",
    beginDate: "2022-02-23",
    endDate: "2022-05-24",
    maxAmount: "",
    minAmount: "",
    toAccount: "",
    actionPerformedBy: "ALL",
    sortField: "action",
    sortOrder: "DESC",
    isLoading: true,
  };


  private destroy$ = new Subject<boolean>();
  constructor(private downloadService: DownloadFileService) {}

  ngOnInit() {}

  onDownloadClick() {
    this.downloadService
      .createReportContent(this.searchItems)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (exportFile) => this.saveExportFile(exportFile),
        (error) => this.handleExportError(error)
      );
  }
  private saveExportFile(exportFile: ExportFile) {
    saveAs(exportFile.data, exportFile.filename);
    // this.exportState = ProcessState.Success;
  }

  private handleExportError(error: any) {
    console.log("error", error);
  }

  /* istanbul ignore next */
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
