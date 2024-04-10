import { ReactNode } from 'react';
import styles from './Modal.module.sass';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <svg className={styles.closeButton} onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#81818B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 6L18 18" stroke="#81818B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}
