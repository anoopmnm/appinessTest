import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private apiBaseUrl;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = environment.API_BASE_URL;
  }

  getAllGitHubUsers() {
    return this.http.get(this.apiBaseUrl + 'users');
  }

  getUserGitHubRepos(url) {
    return this.http.get(url);
  }
}
