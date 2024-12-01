import { jsPDF } from "jspdf";

/**
 * Generates and downloads a PDF.
 * @param {string} title - The title of the PDF.
 * @param {Array} feeData - Array of fee items with "item" and "amount" properties.
 * @param {Array} summaryData - Array of summary items with "label" and "amount" properties.
 * @param {string} fileName - The name of the file to be downloaded (default: "Document.pdf").
 */
export const generatePDF = (title, feeData, summaryData, fileName = "Document.pdf") => {
  try {
    const doc = new jsPDF();

    // Add Title
    doc.setFontSize(18);
    doc.text(title, 20, 20);

    // Add Fee Data
    let yPosition = 30;
    if (feeData && feeData.length > 0) {
      doc.setFontSize(12);
      doc.text("Fee Details", 20, yPosition);
      yPosition += 10;

      feeData.forEach((fee) => {
        doc.text(fee.item, 20, yPosition);
        doc.text(`GH¢ ${fee.amount.toFixed(2)}`, 150, yPosition, { align: "right" });
        yPosition += 8;
      });
    }

    // Add Summary Data
    if (summaryData && summaryData.length > 0) {
      yPosition += 10;
      doc.text("Summary", 20, yPosition);
      yPosition += 10;

      summaryData.forEach((summary) => {
        doc.text(summary.label, 20, yPosition);
        doc.text(`GH¢ ${summary.amount.toFixed(2)}`, 150, yPosition, { align: "right" });
        yPosition += 8;
      });
    }

    // Save the PDF
    doc.save(fileName);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};
