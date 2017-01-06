import { Component, OnInit } from '@angular/core';

import * as _ from "lodash";

import { ArrSubstituteBaseService } from './arr-substitute-base.service';

@Component({
  selector: 'app-substitute-component',
  providers: [ArrSubstituteBaseService],
  templateUrl: './substitute-component.component.html',
  styleUrls: ['./substitute-component.component.css']
})
export class SubstituteComponent implements OnInit {
  public substituteArray:Array <String>;
  public registerArray:Array <String>;
  public diagnoseArray:Array <String>; 

  public oneAtATime:boolean = true;

  public status:Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor( private arrSubstituteBaseService:ArrSubstituteBaseService) { }

  ngOnInit() {
    this.getSubstituteArray();
  }

  getSubstituteArray():void {
    this.substituteArray = this.arrSubstituteBaseService.getOneHundred();
    this.registerArray = _.cloneDeep(this.substituteArray);
    this.diagnoseArray = _.cloneDeep(this.substituteArray);
  }
}