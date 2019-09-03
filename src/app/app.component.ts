import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularconnect-aom';

  ngOnInit() {
    const aomEnabled = (document.body['accessibleNode'] != undefined);

    if(!aomEnabled) {
      alert('AOM is not enabled, turn it on in the configuration')
    }
  }

  // TicTacToe demo
  playMove() {
    // $('board').accessibleNode.childNodes[2].childNodes[0].dispatchEvent(new Event('accessibleclick'))
  }
}
