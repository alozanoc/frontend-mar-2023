import { Component, inject } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss']
})
export class IntranetComponent {
  layoutService = inject(LayoutService);

}
