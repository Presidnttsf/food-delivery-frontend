import "./orderTimeline.css";

const steps = [
  "ORDER_RECEIVED",
  "PREPARING",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
];

const stepLabels = {
  ORDER_RECEIVED: "Order Received",
  PREPARING: "Preparing",
  OUT_FOR_DELIVERY: "Out for Delivery",
  DELIVERED: "Delivered",
};

const OrderTimeline = ({ currentStatus }) => {
  const currentIndex = steps.indexOf(currentStatus);

  console.log("checking", currentStatus);

  return (
    <div className="timeline">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <div key={step} className="step-wrapper">
            {index !== 0 && (
              <div
                className={`line ${
                  isCompleted || isCurrent ? "active" : ""
                }`}
              />
            )}

            <div
              className={`dot ${
                isCompleted
                  ? "completed"
                  : isCurrent
                  ? "current"
                  : ""
              }`}
            />

            <div className="label">
              {stepLabels[step]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderTimeline;