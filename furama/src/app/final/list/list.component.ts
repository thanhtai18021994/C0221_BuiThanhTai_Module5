import {Component, OnInit} from '@angular/core';
import {FinalService} from '../../service/final.service';
import {Benhan} from '../../model/benhan';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benhans: Benhan[];

  constructor(
    private benhanService: FinalService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.benhanService.getAll().subscribe(data => {
      this.benhans = data;
    });
  }

  agreeDelete(id:number) {
      this.benhanService.delete(id).subscribe(()=>{
      });
      this.getAll();
  }

  delete(id:number) {
    Swal.fire({
      title: 'Bạn chắc chưa ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Xóa`,
      denyButtonText: `Không xóa`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.agreeDelete(id);
        Swal.fire('Đã Xóa!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Chưa xóa', '', 'info');
      }
    });
  }

}
