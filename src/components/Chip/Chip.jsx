import "./Chip.css";

// eslint-disable-next-line react/prop-types
const Chip = ({ text, backgroundColor = "#F7F8FA", fontColor = "#5A6B87" }) => {
  return (
    <div className="pop_chip" style={{ backgroundColor, color: fontColor }}>
      {text}
    </div>
  );
};

export default Chip;
