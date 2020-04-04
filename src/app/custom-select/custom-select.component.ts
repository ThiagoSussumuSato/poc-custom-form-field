import { Component, OnInit, Input } from '@angular/core';
import { SupportTableData, SupportTable } from './support-table';
import { CustomSelectService } from './custom-select.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {

  touched = false;

  title: string;
  supportTableDatas: Array<SupportTableData>;
  @Input() parentFormGroup: FormGroup;
  @Input() idSupportTable: number;
  @Input() name: string;

  constructor(private customSelectService: CustomSelectService) { }

  ngOnInit() {
    this.customSelectService.findbyId(this.idSupportTable).subscribe( (supportTable: SupportTable) => {
      this.title = supportTable.description;
      this.supportTableDatas = supportTable.data;
    });
  }


}
