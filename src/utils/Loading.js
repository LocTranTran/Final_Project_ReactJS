import React from 'react'

const Loading = ({isLoading}) => {
  return (
    <>
      {isLoading ? (
        // Biểu tượng SVG trong khi đợi
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor:
              "rgba(0, 0, 0, 0.15)" /* Màu đen với độ mờ là 0.5 */,
            zIndex: "999" /* Đảm bảo overlay hiển thị trên phần tử khác */,
          }}
          className="overlay"
        >
        </div>
      ) : (
        // Văn bản "Search" khi không đang tải
        ""
      )}

      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: "green",
        }}
      >
        {isLoading ? (
          // Biểu tượng SVG trong khi đợi
          <>
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle
                  cx="12"
                  cy="2.5"
                  r="1.5"
                  fill="currentColor"
                  opacity=".14"
                />
                <circle
                  cx="16.75"
                  cy="3.77"
                  r="1.5"
                  fill="currentColor"
                  opacity=".29"
                />
                <circle
                  cx="20.23"
                  cy="7.25"
                  r="1.5"
                  fill="currentColor"
                  opacity=".43"
                />
                <circle
                  cx="21.5"
                  cy="12"
                  r="1.5"
                  fill="currentColor"
                  opacity=".57"
                />
                <circle
                  cx="20.23"
                  cy="16.75"
                  r="1.5"
                  fill="currentColor"
                  opacity=".71"
                />
                <circle
                  cx="16.75"
                  cy="20.23"
                  r="1.5"
                  fill="currentColor"
                  opacity=".86"
                />
                <circle cx="12" cy="21.5" r="1.5" fill="currentColor" />
                <animateTransform
                  attributeName="transform"
                  calcMode="discrete"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                />
              </g>
            </svg>
          </>
        ) : (
          // Văn bản "Search" khi không đang tải
          ""
        )}
      </span>
    </>
  );
}

export default Loading
