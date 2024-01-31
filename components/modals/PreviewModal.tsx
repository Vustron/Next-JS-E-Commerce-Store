'use client';

import { usePreviewModal } from '@/hooks/usePreviewModal';
import Gallery from '@/components/gallery/index';
import Modal from '@/components/modals/Modal';
import Info from '@/components/ui/Info';

const PreviewModal = () => {
	// init modal
	const previewModal = usePreviewModal();
	const product = usePreviewModal((state) => state.data);

	if (!product) {
		return null;
	}

	return (
		<Modal isOpen={previewModal.isOpen} onClose={previewModal.onClose}>
			<div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
				<div className='sm:col-span-4 lg:col-span-5'>
					<Gallery images={product.images} />
				</div>

				<div className='sm:col-span-8 lg:col-span-7'>
					<Info data={product} />
				</div>
			</div>
		</Modal>
	);
};

export default PreviewModal;
