import { useState } from "react";
import React from "react";

interface Props {
  title: String;
  message: String;
  onClose: () => void;
}

const MessageBox = ({ title, message, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      <h2>{title}</h2>
      <p>{message}</p>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default MessageBox;
