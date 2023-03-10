import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {username: 'user1', password: 'password1'},
    {username: 'user2', password: 'password2'},
    {username: 'user3', password: 'password3'}
  ];

  constructor() { }

  login(username: string, password: string) {
    // Check if the provided username and password match any of the hardcoded values
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // If a match is found, store the user in local storage and return true
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    // If no match is found, return false
    return false;
  }

  logout() {
    // Remove the current user from local storage
    localStorage.removeItem('currentUser');
  }

  signup(username: string, password: string) {
    // Check if the provided username already exists
    const userExists = this.users.some(u => u.username === username);
    if (userExists) {
      // If the username already exists, return false
      return false;
    }
    // If the username doesn't exist, add the new user to the list of users and return true
    this.users.push({username, password});
    return true;
  }
}
