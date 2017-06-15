import {Component, OnInit, Output, EventEmitter, ViewContainerRef, ViewChild} from '@angular/core';
import {StudentService} from "../student.service";
// import { Overlay } from 'angular2-modal';
// import { Modal } from 'angular2-modal/plugins/bootstrap';
import {ModalComponent} from "../modal.component";
import {COURSES} from "../course-list";
import {Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
  providers: [StudentService]
})
export class StudentRegisterComponent implements OnInit {

  // @ViewChild('myModal')
  // modal: ModalComponent;


  courses;
  @Output() onAdd = new EventEmitter<boolean>();
  @ViewChild(ModalComponent) public readonly mod: ModalComponent;
  @ViewChild("fileInput") fileInput;
  attachmentFile;
  status;
  message;

  constructor(private studentService : StudentService, private router: Router) {

  }

  ngOnInit() {
    this.courses=COURSES;
  }

  onClick(){
    // console.log("***********************");
    // console.log('this.status : '+this.status);

    if( this.status==='SUCCESS'){
      //success
      this.router.navigate(['/home']);
    }else{
      //error
      this.mod.hide();
    }
  }

  register(student){

    console.log('student.nid : '+student.nid);

    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      this.attachmentFile = fi.files[0];
    };

    let file: File = this.attachmentFile;
    let formData:FormData = new FormData();
    formData.append('nidFile', file, file.name);
    formData.append('fname',student.fname);
    formData.append('lname',student.lname);
    formData.append('sid',student.sid);
    formData.append('major',student.major);
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });

    this.studentService.registerStudent(formData,options)
      .subscribe(
        response => {
          console.log('RESPONSE : '+response);
                this.onAdd.emit(true);
                this.status='SUCCESS';
                this.message=student.fname+" "+student.lname+" "+"has been registered successfully";
                this.mod.show();


        },
        error => {
          console.log("ERROR :: register :: StudentRegisterComponent");
          console.log(error);
          this.status='ERROR';
          this.message="An error occured while registering student "+student.fname+" "+student.lname;
          this.mod.show();
        }
      );

  }




}
