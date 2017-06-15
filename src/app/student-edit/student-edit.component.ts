import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {StudentService} from "../student.service";
import {ModalComponent} from "../modal.component";
import {COURSES} from "../course-list";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
  providers: [StudentService]
})
export class StudentEditComponent implements OnInit {

  complexForm : FormGroup;
  @Input() student;
  @Output() onEdit=new EventEmitter<boolean>();
  @ViewChild(ModalComponent)
  public readonly mod: ModalComponent;
  courses;
  // selectedCourse;



  constructor(private studentService : StudentService,private fb: FormBuilder) {
    // console.log('student val '+this.student.fname);


  }


  ngOnInit() {
    this.courses=COURSES;
    // this.selectedCourse=this.student.major;
    console.log('major :: '+this.student.major);
    this.complexForm = this.fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      // 'fname' : this.student.fname,
      // 'lname': this.student.lname,
      // 'sid' : this.student.sid,
      // 'major' : this.student.major,
      // 'nid' : this.student.nid,
      'id': this.student.id,
      'fname' : this.student.fname,
      'lname': this.student.lname,
      'sid' : this.student.sid,
      'major' : this.student.major,
      'nid' : this.student.nid
    });
  }


  submitForm(value: any):void{
    console.log('Clicked submitForm :: StudentEditComponent');
    console.log(value);
    this.studentService.edit(value)
      .subscribe(
        response => {
          console.log('RESPONSE : '+response);
          this.onEdit.emit(true);

        },
        error => {
          console.log("ERROR :: edit :: StudentEditComponent");
          console.log(error);
          this.mod.show();

        }
      );

  }

}
