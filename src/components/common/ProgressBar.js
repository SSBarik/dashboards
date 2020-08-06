import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, max } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 6,
    margin: 0,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed/(max/100)}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 10,
    color: 'white',
    fontWeight: 'normal',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;