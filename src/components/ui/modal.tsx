import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
}

export default function Modal({ isOpen, children, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md">
                {children}
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                    Close
                </button>
            </div>
        </div>
    );
}
