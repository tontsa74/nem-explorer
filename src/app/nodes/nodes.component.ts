import { Component, OnInit, ViewChild } from '@angular/core';
import { NemNisService } from '../nem-nis.service';
import { Node } from '../interfaces/Node';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  nodes: Node[] = [];
  nodeSelected: Node;

  displayedColumns: string[] = ['host', 'name', 'version'];
  dataSource = new MatTableDataSource<Node>(this.nodes);
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private nemnis: NemNisService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.fetchNodes();
  }

  fetchNodes() {
    this.nemnis.fetchNodes((response) => {
      console.log(response.data[0].endpoint.host);
      this.dataSource.data = response.data; // this.nodes;
    });
  }

  nodeClicked(node: Node): void {
    this.nodeSelected = node;
    console.log(node.identity['public-key']);
  }
}
