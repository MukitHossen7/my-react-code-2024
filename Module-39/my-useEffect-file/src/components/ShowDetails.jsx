const ShowDetails = ({ user }) => {
  const { name, email, website, phone } = user;
  return (
    <div className="detailsStyle">
      <h3>Name : {name}</h3>
      <p>Email : {email}</p>
      <p>Website : {website}</p>
      <p>Phone : {phone}</p>
    </div>
  );
};

export default ShowDetails;
