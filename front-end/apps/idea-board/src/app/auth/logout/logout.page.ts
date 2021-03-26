import { Component, OnInit } from '@angular/core';
import { AuthLogout } from '@ccal-apps/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ccal-apps-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new AuthLogout());
  }
}
