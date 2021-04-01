import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'ql-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnDestroy {
  icons: { [key: string]: string };

  controls: { [key: string]: AbstractControl | null };

  protected unsubscribe$ = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
