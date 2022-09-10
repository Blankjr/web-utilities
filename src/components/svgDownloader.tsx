import React from 'react'
import { useCallback, useRef } from "react";
import QRCode from "react-qr-code";

function downloadBlob(blob: Blob, filename: string) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}
interface QRCodeprops {
  qrCodeValue: string
  backgroundColor: `#{string}`
  foregroundColor: `#{string}`
}
export default function SvgDownloader(props: QRCodeprops) {
  const svgRef = useRef(null);
  const downloadSVG = useCallback(() => {
    if (svgRef.current) {
      const svg = svgRef.current.innerHTML;
      const blob = new Blob([svg], { type: "image/svg+xml" });
      downloadBlob(blob, `myimage.svg`);
    }
  }, []);
  return (
    <>
      <div ref={svgRef}>
        <QRCode className="m-4" value={props.qrCodeValue} bgColor={props.backgroundColor} fgColor={props.foregroundColor} />
      </div>
      <button className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={downloadSVG} >
        Download as SVG
      </button>
    </>
  )
}
