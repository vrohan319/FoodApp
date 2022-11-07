import classes from "./checkout.module.css";

const Checkout = (props) => {
  const onConfirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onConfirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onClose}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
