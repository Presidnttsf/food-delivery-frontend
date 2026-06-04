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
  const currentIndex = steps.indexOf(
    currentStatus?.trim().toUpperCase()
  );

  return (
    <div className="timeline">
      {steps.map((step, index) => {
        const isDone = index <= currentIndex;
        const isCurrent = index === currentIndex;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={step}
            className={`step-wrapper ${isDone ? "active" : ""}`}
          >
            {/* LINE — before each step except the first */}
            {index !== 0 && (
              <div className={`line ${isDone ? "active" : ""}`} />
            )}

            {/* DOT
                - completed (solid green): any passed step, OR the last step when reached
                - current (hollow green ring): the active step when it's NOT the last
                - default (grey): future steps                                          */}
            <div
              className={`dot ${
                isDone && (!isCurrent || isLast)
                  ? "completed"
                  : isCurrent
                  ? "current"
                  : ""
              }`}
            />

            {/* LABEL */}
            <div className="label">{stepLabels[step]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderTimeline;