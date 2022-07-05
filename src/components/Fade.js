import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  visibility: "hidden",
};

const transitionStyles = {
  entering: { opacity: 1, visibility: "visible" },
  entered: { opacity: 1, visibility: "visible" },
  exiting: { opacity: 0, visibility: "visible" },
  exited: { opacity: 0, visibility: "hidden" },
};

export default function Fade({ in: inProp, children }) {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
