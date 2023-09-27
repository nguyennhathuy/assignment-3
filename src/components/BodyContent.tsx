import React from "react";
import { Book } from "../types/Book"

type Props = {
    bookList: Book[];
    isOpenAddmodal: true | false;
    isOpenDeleteModal: true | false;
    currentPage: number;
    handleToggleModal: (type: string, id?: string) => void;
    handleCreateBook: (book: Book) => void;
    handleDeleteBook: () => void;
    handleSearchBook: (event) => void;
    handleSwitchPage: (page: number) => void;
}

function BodyContent({ bookList, isOpenAddmodal, isOpenDeleteModal, currentPage, handleToggleModal, handleCreateBook, handleDeleteBook, handleSearchBook, handleSwitchPage }: Props): React.ReactNode {
    
    return (
        <div >
            <button onClick={() => handleToggleModal("string")}>hello</button>
            hello
        </div>
    )
}

export default BodyContent