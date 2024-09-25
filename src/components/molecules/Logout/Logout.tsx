import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export default function Logout() {
	const auth = useAuth();
	const navigate = useNavigate();

	return (
		<>
			<button
				onClick={() => {
					auth.signout(() => navigate('/'));
				}}
			>Logout</button>
		</>
	);
}
