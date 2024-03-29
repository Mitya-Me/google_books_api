import { FC } from "react";
import classes from "./bookDescrPage.module.scss";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const BookDescrPage: FC = () => {
    const params: { id: string } = useParams();
    const books = useTypedSelector((state) => state.books.books.items);
    const history = useHistory();

    let filtered =  books.filter(el=> el.id === params.id);

    return (
        <>
            {filtered.map((b) => (
                <section key={b.volumeInfo.title + Math.floor(Math.random() * 10)} className={classes.bookdescr}>
                    <button
                        className={classes.bookdescr__btn}
                        onClick={() => history.push('/')}>
                    </button>
                    <div className={classes.bookdescr__wrapper}>
                        <div className={classes.bookdescr__cover}>
                            <img
                                src={
                                    b.volumeInfo.imageLinks === undefined
                                        ? "http://shop.btpubservices.com/content/images/cover_not_available_360.jpg?height=200"
                                        : b.volumeInfo.imageLinks.thumbnail
                                }
                                alt='book cover'
                            />
                        </div>
                        <div className={classes.bookdescr__text}>
                            <ul className={classes.bookdescr__text_list}>
                                <li className={classes.bookdescr__text_category}>
                                    {b.volumeInfo.categories}
                                </li>
                                <li className={classes.bookdescr__text_title}>
                                    {b.volumeInfo.title}
                                </li>
                                <li className={classes.bookdescr__text_author}>
                                    { b.volumeInfo.authors.length > 1 ? b.volumeInfo.authors.join(', ') : b.volumeInfo.authors}
                                </li>
                            </ul>
                            <div className={classes.bookdescr__text_info}>
                                { b.volumeInfo.description}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default BookDescrPage;
