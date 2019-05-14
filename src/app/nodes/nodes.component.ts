import { Component, OnInit } from '@angular/core';
import { NemNisService } from '../nem-nis.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor(private nemnis: NemNisService) { }

  ngOnInit() {
    this.fetchNodes();
  }

  fetchNodes() {
    this.nemnis.fetchNodes((response) => {
      console.log(response);
    });
  }
}
