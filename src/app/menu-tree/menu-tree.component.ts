import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
//import { MenuItem } from './menu';
@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {
  data1: any;
  selectedNode: any;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.fetchMenuItems();
  }

  fetchMenuItems(): void {
    this.menuService.getMenuData().subscribe(res => {
      this.data1 = res.data;
      console.log(this.data1);
    });
  }
  openPopup(node: any): void {
    this.selectedNode = node;
  }

  closePopup(): void {
    this.selectedNode = null;
  }
}