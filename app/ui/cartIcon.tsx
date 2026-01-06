import clsx from 'clsx';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function CartIcon() {
	return (
		<button>
			<ShoppingCartIcon className="h-12 w-12 text-gray-50" />
		</button>
	);
}