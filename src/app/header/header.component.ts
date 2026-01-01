import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showSettings = false;

  constructor(private dialog: MatDialog) { }

  openSettings() {
    this.showSettings = true;
    const popup = this.dialog.open(SettingsComponent, {
      disableClose: true,
      width: '60%',
      height: 'auto',
    });
    // popup.afterClosed().subscribe(() => {
    // if (movement) this.movementService.updateMovement(movement);
    // });
  }
}
