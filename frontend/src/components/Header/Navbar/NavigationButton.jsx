import { useState, useEffect, useRef } from "react";

function NavigationButton() {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      const handleClick = () => {
        setIsActive(!isActive);
      };
      buttonRef.current.addEventListener("click", handleClick);

      return () => {
        buttonRef.current.removeEventListener("click", handleClick);
      };
    }
  }, [isActive]);
  return (
    <>
      <div
        className={`NavigationButton_button ${isActive ? "active" : ""}`}
        ref={buttonRef}
      >
        <span></span>
        <span></span>
      </div>
    </>
  );
}
export default NavigationButton;
