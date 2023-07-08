"use client"
import { useStoreModal } from "@/hook/use-store-model"
import { Modal } from "../ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Create store"
            description="Add a New Store to Manage "
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
       />
           
            )
}