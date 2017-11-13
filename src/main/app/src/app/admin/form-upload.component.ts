import {Component, OnInit} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadService} from "../service/upload.service";

@Component({
    selector: 'form-upload',
    templateUrl: './form-upload.component.html',
    styleUrls: [],
    providers: [UploadService]
})
export class FormUploadComponent implements OnInit {

    selectedFiles: FileList;
    currentFileUpload: File;
    message: any;
    progress: { percentage: number } = { percentage: 0 };

    constructor(private uploadService: UploadService) { }

    ngOnInit() {
    }

    selectFile(event) {
        // const file = event.target.files.item(0)
        this.selectedFiles = event.target.files;
    }

    upload() {
        this.progress.percentage = 0;

        this.currentFileUpload = this.selectedFiles.item(0)
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.message = event.body;
                console.log('File is completely uploaded!');
            }
        })

        this.selectedFiles = undefined
    }
}