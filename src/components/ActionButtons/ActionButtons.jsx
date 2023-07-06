import "./ActionButtons.css";

/* eslint-disable react/prop-types */
const ActionButtons = ({ actions }) => {
  return (
    <div className="p_action_buttons_container">
      {actions.map((action) => (
        <div
          key={action.id}
          className="com_action_buttons_item"
          onClick={action.onClick}
        >
          <img src={action.icon} />
          {action.counter && (
            <span className="com_action_buttons_counter">{action.counter}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ActionButtons;
