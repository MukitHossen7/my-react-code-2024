import "../App.css";
const Book = ({ book }) => {
  console.log(book);
  const { name, price } = book;
  return (
    <div className="bookStyle">
      <h3>Book Name: {name}</h3>
      <h4>Price: {price}</h4>
    </div>
  );
};

export default Book;
