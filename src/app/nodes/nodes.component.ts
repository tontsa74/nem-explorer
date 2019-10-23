import { Component, OnInit, ViewChild } from '@angular/core';
import { NemNisService } from '../nem-nis.service';
import { Node } from '../interfaces/Node';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';

/**
 * Display table of NEM nodes.
 */
@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  /**
   * NEM nodes table.
   */
  nodes: Node[] = [];

  /**
   * Selected node
   */
  nodeSelected: Node;

  /**
   * Table columns to display.
   */
  displayedColumns: string[] = ['host', 'name', 'version'];

  /**
   * Data source of displayed table.
   */
  dataSource = new MatTableDataSource<Node>(this.nodes);

  /**
   * Page size options for table.
   */
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];

  /**
   * Table paginator output event.
   */
  pageEvent: PageEvent;

  /**
   * Paginator of table.
   */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   * NEM node url
   */
  nodeUrl: string;

  /**
   * @param nemnis Service to fetch data.
   */
  constructor(private nemnis: NemNisService) { }

  /**
   * Init and fetch nodes
   */
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.fetchNodes();
  }

  /**
   * Fetch nodes from service.
   */
  fetchNodes() {
    this.nemnis.fetchNodes((response) => {
      if (response.data) {
        this.dataSource.data = response.data;
      }
    });
  }

  /**
   * Change to selected node.
   * @param node NEM node
   */
  nodeClicked(node: Node): void {
    this.nodeSelected = node;
    const url = `${ node.endpoint.protocol }://${ node.endpoint.host }:${ node.endpoint.port}`;
    this.nemnis.changeNode(url);
    this.fetchNodes();
  }
}
