import { Component, OnInit } from '@angular/core';

interface SidebarItem {
  label: string;
  route: string;
  icon?: string;
  children?: SidebarItem[]; // optional dropdowns
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItems: SidebarItem[] = [];

  ngOnInit(): void {
    this.loadSidebarItems();
  }

  loadSidebarItems() {
    this.sidebarItems = [
      {
        label: 'Time Entry',
        route: '/dashboard/time-entry',
        icon: 'bi-clock'
      },
      {
        label: 'Time History',
        route: '/dashboard/time-history',
        icon: 'bi-calendar-check'
      },
      {
        label: 'Reports',
        route: '/dashboard/reports',
        icon: 'bi-graph-up'
      },
      {
        label: 'Projects',
        route: '',
        icon: 'bi-folder',
        children: [
          { label: 'Project A', route: '/dashboard/projects/a' },
          { label: 'Project B', route: '/dashboard/projects/b' }
        ]
      }
    ];
  }
}

