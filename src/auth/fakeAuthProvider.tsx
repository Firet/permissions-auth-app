/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
  isAuthenticated: false,
  isAdmin: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.isAdmin = false;
    setTimeout(callback, 100);
  },
  signinAdmin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.isAdmin = true;
    setTimeout(callback, 100);
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.isAdmin = false,
      setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
