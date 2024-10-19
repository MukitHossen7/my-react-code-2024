const MyButton = () => {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <div>
      <div>
        <button className="btn">I'm a button</button>
      </div>
      <div>
        <h2>{user.name}</h2>
        <img className="imgStyle" src={user.imageUrl} />
      </div>
    </div>
  );
};

export default MyButton;
