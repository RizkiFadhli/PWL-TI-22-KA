import { OverlayTrigger, Tooltip } from "react-bootstrap";
const ButtonIcon = ({ children, color, title, position = "top", onAction }) => {
  return (
    <OverlayTrigger
      delay={{ show: 250, hide: 400 }}
      placement={position}
      overlay={renderTooltip({ title: title })}
    >
      <button
        className={"btn btn-icon " + color}
        type="button"
        onClick={onAction}
      >
        {children}
      </button>
    </OverlayTrigger>
  );
};
const renderTooltip = (props) => {
  return (
    <Tooltip id="button-tooltip" {...props}>
      {props.title}
    </Tooltip>
  );
};
const ButtonPrimary = ({ children, items, actions }) => {
  return (
    <button
      className={"btn " + items.btn_class}
      type={items.type ? items.type : "button"}
      title={items.title}
      onClick={actions}
    >
      {children}
    </button>
  );
};
const ButtonSecondary = ({ children, items, actions }) => {
  return (
    <button
      className={"btn btn-clear " + items.btn_class}
      type="button"
      title={items.title}
      onClick={actions}
    >
      {children}
    </button>
  );
};
export const ButtonSearch = ({ children, onChange, value }) => {
  return (
    <div className="position-relative my-1 w-100 me-2">
      <input
        type="text"
        className="form-control form-control-solid w-250px ps-12"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  );
};
export { ButtonPrimary, ButtonSecondary, ButtonIcon };
