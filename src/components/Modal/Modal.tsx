import React, { ReactNode } from 'react';
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
                <button className={styles.closeButton} onClick={onClose}>Закрыть</button>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}
