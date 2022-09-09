import React from 'react'
import { useCallback, useRef } from "react";


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


export default function SvgDownloader(props: any) {
  const svgRef = useRef();

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `myimage.svg`);
  }, []);
  //todo: move qr code component to this component, keep input states in parent just pass down as props?
  //todo: replace download generic svg with actual qr code
  return (
    <>
      <div ref={svgRef}>
        <svg

          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256.000000 256.000000"
          preserveAspectRatio="xMidYMid meet"
          height="100" width="100">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        </svg>
      </div>
      <button className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={downloadSVG} >
        Download as SVG
      </button>
    </>
  )
}

