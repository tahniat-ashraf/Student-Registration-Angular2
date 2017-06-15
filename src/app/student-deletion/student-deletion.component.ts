import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {StudentService} from "../student.service";
import {ModalComponent} from "../modal.component";

@Component({
  selector: 'app-student-deletion',
  templateUrl: './student-deletion.component.html',
  styleUrls: ['./student-deletion.component.css'],
  providers:[StudentService]
})
export class StudentDeletionComponent implements OnInit {

  @Input() student;
  @Output() onDelete = new EventEmitter<boolean>();
  @ViewChild(ModalComponent) public readonly mod: ModalComponent;


  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }


  showConfirmation(){
    console.log('Show Confirmation ..');
    this.mod.show();
  }

  delete(){
    console.log('Delete Button Click !!!');
    console.log('Student : '+this.student.fname);
    this.studentService.delete(this.student.id)
      .subscribe(
        response => {
          console.log('RESPONSE : '+response);
          this.onDelete.emit(true);

        },
        error => {
          console.log("ERROR :: delete :: StudentDeletionComponent");
          console.log(error);
        }
      );
  }

}
