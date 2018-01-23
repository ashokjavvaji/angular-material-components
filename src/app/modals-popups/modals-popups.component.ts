import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modals-popups',
  templateUrl: './modals-popups.component.html',
  styleUrls: ['./modals-popups.component.css']
})
export class ModalsPopupsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  simpleName: string;
  simpleAge: number;
  simpleDialog: MatDialogRef<DemoSimpleDialog>;

  ngOnInit() {
  }

  openDialog() {
    this.simpleDialog = this.dialog.open(DemoSimpleDialog, {
      hasBackdrop: false,
      width: '50%',
      data: {name: this.simpleName, age: this.simpleAge}
    });

    this.simpleDialog.afterClosed().subscribe(result => {
      console.log('Dialog Closed');
      if(result){
        this.simpleName = result.name;
        this.simpleAge = result.age;
      }
    });
  }
}

@Component({
  selector: 'simple-dialog',
  templateUrl: 'simpleDialog.html',
})
export class DemoSimpleDialog {
  constructor(public dialogRef: MatDialogRef<DemoSimpleDialog>, @Inject(MAT_DIALOG_DATA) public data:any) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
