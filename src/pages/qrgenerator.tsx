// import React, { useState, useRef } from "react";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { HexColorPicker, HexColorInput } from "react-colorful";
import styles from "../styles/qrgenerator.module.css"
import { useDebounce } from 'usehooks-ts'
function qrgenerator() {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [foregroundColor, setForegroundColor] = useState("#000000")
  const debouncedForegroundColor = useDebounce<string>(foregroundColor, 200)
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const debouncedBackgroundColor = useDebounce<string>(backgroundColor, 200)

  return (
    <div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
      <h1 className="text-2xl sm:text-6xl font-bold text-primary mt-10 text-center">
        QR Code <span className="text-active">Generator</span>
      </h1>
      <h2 className="sm:block text-active text-2xl mt-6 hidden">
        Generate a QR Code and download as SVG
      </h2>
      <div className="flex flex-col sm:flex-row ">
        <div className="basis-1/2 m-4">
          <HexColorPicker color={foregroundColor} onChange={setForegroundColor} />
          <div className={styles.value} style={{ borderColor: debouncedForegroundColor }}>
            foreground color
          </div>
          <span className="hidden sm:inline">#</span><HexColorInput color={foregroundColor} onChange={setForegroundColor}
            className="hidden sm:inline-block mt-4 text-sm w-1/2 p-2 rounded border-blue-700 border-2"
          />
        </div>
        <div className="basis-1/2 m-4">
          <HexColorPicker className="responsive react-colorful" color={backgroundColor} onChange={setBackgroundColor} />
          <div className={styles.value} style={{ borderColor: debouncedBackgroundColor }}>
            background color
          </div>
          <span className="hidden sm:inline">#</span><HexColorInput color={backgroundColor} onChange={setBackgroundColor}
            className="hidden sm:inline-block mt-4 text-sm w-1/2 p-2 rounded border-blue-700 border-2"
          />
        </div>
      </div>
      <input type="text"
        placeholder="Enter a link, number or any text to generate QR-Code"
        className="sm:mt-10 text-sm w-1/2 p-4 rounded border-blue-700 border-2"
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      />
      {qrCodeValue != "" && (
        <QRCode className="m-4" value={qrCodeValue} bgColor={backgroundColor} fgColor={foregroundColor} />
      )}

    </div>
  )
}

export default qrgenerator

