export default class App {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.className += ' loaded';
    });
  }
}
