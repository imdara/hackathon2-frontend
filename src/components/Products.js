export default function Products({ arr }) {
  return (
    <>
      <h1>Products</h1>
      <ul id="listOfProducts">
        {arr.map((item) => (
          <li className="card">
            <img className="card-img-top" src={item.image} />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <h5 className="card-text">
                <b>Rating: </b>
                {item.rating} out of 5
              </h5>
              <h5 className="card-text">
                <b>Price: </b> ₹{item.price}
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
