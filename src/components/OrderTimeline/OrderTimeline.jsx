import "./orderTimeline.css";

const steps = [
  "Order Received",
  "Preparing",
  "Out for Delivery",
  "Delivered"
];

const OrderTimeline = ({ currentStatus }) => {
  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="timeline">

      {steps.map((step, index) => (
        <div key={step} className="step-wrapper">

          {/* LINE */}
          {index !== 0 && (
            <div
              className={`line ${
                index <= currentIndex ? "active" : ""
              }`}
            />
          )}

          {/* DOT */}
          <div
            className={`dot ${
              index <= currentIndex ? "active" : ""
            }`}
          />

          <div className="label">{step}</div>
        </div>
      ))}

    </div>
  );
};

export default OrderTimeline;