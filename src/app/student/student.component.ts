import {Component, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import {StudentService} from '../student.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import {ModalComponent} from '../modal.component';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]
})

export class StudentComponent implements OnInit {
  // @ViewChild(ModalComponent)
  // public readonly mod: ModalComponent;
  student;
  students;
  showEdit;

  constructor(private studentService: StudentService,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    // overlay.defaultViewContainer = vcRef;
//  modal.overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    // this.mod.show();
    this.findAll();
  }

  findAll(){
    this.studentService.findAll()
      .subscribe(
        response => {
          console.log('RESPONSE : '+response);
          this.students=response;
        },
        error => {
          console.log("ERROR :: register :: StudentRegisterComponent");
          console.log(error);
        }
      );
  }


  showEditForm(student){
    console.log('Entered :: showEditForm :: fname :: '+student.fname);
    this.showEdit = true;
    this.student = student;

  }

  onDelete(deleted: boolean) {
    deleted ? this.findAll() : null;
  }

  onAdd(added: boolean) {
    added ? this.findAll() : null;

  }


  onEdit(edited: boolean) {
   if(edited === true){
     this.modal.alert()
       .showClose(true)
       .title('Success')
       .body(`
       <i>Student information edited successfully.</i>
            `)
       .open();
     this.findAll();
     console.log('making showEdit false ..');
     this.showEdit = false;
   }
  }


}
