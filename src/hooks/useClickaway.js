import { useEffect } from "react";

/**
 * Triggers a callback function when a click is detected outside of the
 * referenced element.
 *
 * This hook listens for `mousedown` events on the document and checks if the
 * event's target is outside of the element referenced by `ref`. If it is, the
 * provided `callback` function is executed.
 *
 * @param {Object}    ref         A React ref object attached to the element
 *                                you want to detect clicks outside of.
 * @param {Function}  callback    A function to be called when a click outside
 *                                the referenced element is detected.
 * @return {void}
 */

export const useClickAway = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref || !ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, callback]);
};
