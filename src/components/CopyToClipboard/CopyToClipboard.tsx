import React, { useState } from "react";
import { BsLink45Deg, BsCheckCircle } from "react-icons/bs";
import { colors } from "../../styles/colors";
import { Button } from "./styles";

const CopyToClipboard = ({ textToCopy }) => {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);

  const copyToClipboard = (e) => {
    e.preventDefault();
    if (window["clipboardData"] && window["clipboardData"].setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      setCopiedToClipBoard(true);

      setTimeout(() => {
        setCopiedToClipBoard(false);
      }, 5000);
      return window["clipboardData"].setData("Text", textToCopy);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = textToCopy;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        setCopiedToClipBoard(true);

        setTimeout(() => {
          setCopiedToClipBoard(false);
        }, 5000);
        return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <Button onClick={(e) => copyToClipboard(e)} title="Copy to clipboard">
      {copiedToClipBoard ? (
        "link copiado!"
      ) : (
        <BsLink45Deg size={24} color={colors.primary} />
      )}
    </Button>
  );
};

export default CopyToClipboard;
