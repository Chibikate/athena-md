import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Creates a function to download certificate as PDF
 * @param {React.RefObject} certRef - Reference to the certificate component
 * @param {string} name - Name to use in the PDF filename
 * @returns {Function} Download function
 */
export const createCertificateDownloader = (certRef, name) => {
  return () => {
    if (!certRef.current) return;
    
    const certificateElement = certRef.current;
    
    html2canvas(certificateElement, {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      x: 0,
      y: 0,
      width: certificateElement.offsetWidth,
      height: certificateElement.offsetHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`certificate-${name.replace(/\s+/g, '-').toLowerCase() || 'athena-md'}.pdf`);
    });
  };
};