import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NemNisService } from './nem-nis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NEM - Blockchain Explorer';
  navLinks: any[];
  activeLinkIndex = -1;
  nodeUrl: string;

  constructor(private nemnis: NemNisService, private router: Router) {
    this.nemnis.currentNode.subscribe(nodeUrl => this.nodeUrl = nodeUrl);

    this.navLinks = [
      {
        label: 'Blocks',
        path: './blocks',
        index: 0
      },
      {
        label: 'Accounts',
        path: './accounts',
        index: 1
      },
      {
        label: 'Nodes',
        path: './nodes',
        index: 2
      },
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  changeNode(nodeUrl: string): void {
    this.nemnis.changeNode(nodeUrl);
  }
}
