'use client';

import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import useMounted from '@/hooks/useMounted';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const NavbarActions = () => {
	// fix hydration error
	const isMounted = useMounted();

	// init router
	const router = useRouter();

	// init cart
	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button
				onClick={() => router.push('/cart')}
				className='flex items-center rounded-full bg-black px-4 py-2'
			>
				<ShoppingBag size={20} color='white' />
				<span className='ml-2 text-sm font-medium text-white'>
					{cart.items.length}
				</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
