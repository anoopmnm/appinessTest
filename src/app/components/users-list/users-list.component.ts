import { Component, OnInit, Inject } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  error: any;
  filteredUserList: any;
  allUsers: [any];
  userRepos: any;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private userServices: GitHubService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getAllGitHubUsers();
  }

  /**
   * Get GitHub Repos of User
   */
  getUserRepos(url, user) {
    this.userRepos = {};
    this.spinner.show();
    this.userServices.getUserGitHubRepos(url).subscribe((res: any) => {
      if (res) {
        this.userRepos.repoList = res;
        this.userRepos.userName = user;
        setTimeout(() => {
          /** spinner ends after some seconds */
          this.spinner.hide();
        }, 100);
        this._bottomSheet.open(UserReposComponent, {
          data: this.userRepos
        });
      }
    });
  }

  /**
   * Get List of all GitHub Users
   */
  public getAllGitHubUsers() {
    this.userServices.getAllGitHubUsers().subscribe((res: any) => {
      this.allUsers = res;
      this.filteredUserList = res;
      setTimeout(() => {
        /** spinner ends after some seconds */
        this.spinner.hide();
      }, 100);
    },
      error => {
        console.log('Error: ', error);
      });
  }

  /**
   * onSearch
   */
  public onSearch(event) {
    console.log(event.target.value);
    this.filteredUserList = this.allUsers.filter(res => res.login.startsWith(event.target.value));
  }

}

@Component({
  selector: 'user-repos',
  templateUrl: 'user-repos.html',
  styleUrls: ['./users-list.component.css']
})

export class UserReposComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
}
