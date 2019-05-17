import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NemNisService } from './nem-nis.service';

/**
 * Displays title, current NEM node url and navigation bar.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * App title
   */
  title = 'NEM - Blockchain Explorer';

  /**
   * Table of navigation bar links
   */
  navLinks: any[];

  /**
   * Currently activated navigation bar link index
   */
  activeLinkIndex = -1;

  /**
   * NEM node url
   */
  nodeUrl: string;

  /**
   * Subscribes NEM node url with service.
   * Defines navigation links.
   * @param nemnis Service to fetch data.
   * @param router Angular router
   */
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

  /**
   * Change NEM node
   * @param nodeUrl NEM node url
   */
  changeNode(nodeUrl: string): void {
    this.nemnis.changeNode(nodeUrl);
  }
}
