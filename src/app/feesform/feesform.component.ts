import { Component, Input, OnInit } from '@angular/core';
import { FeesServiceService } from '../fees-service.service';
import { IFees } from '../Ifees';

@Component({
  selector: 'app-feesform',
  templateUrl: './feesform.component.html',
  styleUrls: ['./feesform.component.css']
})
export class FeesformComponent implements OnInit {
  FeesServiceService: any;

  constructor(private service:FeesServiceService) { }

  ngOnInit(): void {
  }
  data = new IFees();

  @Input() clicked = new IFees();



  submit() {

    this.FeesServiceService.addFeesData(this.clicked).subscribe(() => {});
    
    location.reload();

  }

}
