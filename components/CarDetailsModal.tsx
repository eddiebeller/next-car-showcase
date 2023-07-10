import { CarProps } from '@/types';
import React from 'react';

interface CarDetailsModalProps {
	car: CarProps;
	isOpen: boolean;
	closeModal: () => void;
}
export const CarDetailsModal = ({
	isOpen,
	closeModal,
	car,
}: CarDetailsModalProps) => {
	return <div>CarDetailsModal</div>;
};
