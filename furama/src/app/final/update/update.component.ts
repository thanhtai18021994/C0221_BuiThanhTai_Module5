import { Component, OnInit } from '@angular/core';
import {FinalService} from '../../service/final.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../model/employee';
import {Benhan} from '../../model/benhan';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  currentId:number;
  benhanGroup:FormGroup;
  constructor(
    private finalSerVice:FinalService,
    private activatedRouter:ActivatedRoute,
    private fb:FormBuilder,
    private router:Router
  ) { }
  validator = {
    maBenhAn: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],
    maBenhNhan:[
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],
    tenBenhNhan:[
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],
    ngayNhapVien:[
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],
    ngayRaVien:[
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],
    lyDoNhapVien:[
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],
    phuongAnDieutri:[
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],
    bacSiDieuTri:[
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ],

  };

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(param=>{
      this.currentId=+param.get("id");
    })
    this.finalSerVice.findById(this.currentId).subscribe(data=>{
      this.benhanGroup=this.fb.group({
        maBenhAn:[data.maBenhAn,[Validators.required]],
        maBenhNhan:[data.maBenhNhan,[Validators.required]],
        tenBenhNhan:[data.tenBenhNhan,[Validators.required]],
        ngayNhapVien:[data.ngayNhapVien,Validators.required],
        ngayRaVien:[data.ngayRaVien,[Validators.required]],
        lyDoNhapVien:[data.lyDoNhapVien,[Validators.required]],
        phuongAnDieutri:[data.phuongAnDieutri,[Validators.required]],
        bacSiDieuTri:[data.bacSiDieuTri,Validators.required]
      })
    })
  }

  onSubmit() {
    if (this.benhanGroup.invalid) {
      Object.keys(this.benhanGroup.controls).forEach(field => {
        const control = this.benhanGroup.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      let benhan: Benhan = this.benhanGroup.value;
      this.finalSerVice.updateService(this.currentId,benhan).subscribe(response => {
        this.benhanGroup.reset(true);
        this.router.navigateByUrl("/final/list")
      });
    }
  }
}
