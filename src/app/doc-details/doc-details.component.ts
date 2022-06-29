import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, docs } from '../docs';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css']
})
export class DocDetailsComponent implements OnInit {

  doc: Doc | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docIdFromRoute = Number(routeParams.get('docId'));

    this.doc = docs.find(doc => doc.id === docIdFromRoute);
  }

}
