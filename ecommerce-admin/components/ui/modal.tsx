"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import React from "react";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    chidren?: React.ReactNode;
}
export const Modal : React.FC <ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    chidren
}) => {
    const onChange = (open: boolean) => {
        if (!open) {

            onClose();
        }
    };
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>
                    {chidren}
                </div>
            </DialogContent>
        </Dialog>
    );
};

