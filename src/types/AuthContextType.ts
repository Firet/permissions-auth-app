export interface AuthContextType {
	authState: { isAuthenticated: boolean; isAdmin: boolean };
	user: string | null;
	signin: (user: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}
