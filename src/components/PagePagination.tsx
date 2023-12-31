import { Book } from "../types/Book";

type Props = {
    bookList: Book[] | [];
    currentPage: number;
    handleSwitchPage: (number: number) => void;
}

function PagePagination({ bookList, currentPage, handleSwitchPage }: Props): JSX.Element {
    return (
        <div className="pagination">
            {
                (() => {
                    const numbers: JSX.Element[] = [];
                    for (let i = 0; i < Math.ceil(bookList.length / 5); i++) {
                        numbers.push(<a 
                                        href="/#" 
                                        key={i} 
                                        className={currentPage === i + 1 ? "active" : ""}
                                        onClick={() => handleSwitchPage(i + 1)}
                                    >
                                            {i + 1}
                                    </a>)
                    }
                    return numbers
                })()
            }
        </div>
    )
}

export default PagePagination