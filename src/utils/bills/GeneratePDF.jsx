import { jsPDF } from "jspdf";

/**
 * Generates and downloads a PDF with flexible content generation
 * @param {Object} options - Configuration options for PDF generation
 * @param {string} options.title - The title of the PDF
 * @param {string} [options.fileName='Document.pdf'] - The name of the file to be downloaded
 * @param {Array} [options.sections=[]] - Array of sections to be added to the PDF
 */
export const generateUniversalPDF = (options) => {
  try {
    const {
      title = "Document",
      fileName = "Document.pdf",
      sections = []
    } = options;

    const doc = new jsPDF();
    let yPosition = 20;

    // Add Title
    doc.setFontSize(18);
    doc.text(title, 20, yPosition);
    yPosition += 15;

    // Render sections
    sections.forEach((section) => {
      // Section Title
      if (section.sectionTitle) {
        doc.setFontSize(14);
        doc.text(section.sectionTitle, 20, yPosition);
        yPosition += 10;
      }

      // Table-like data
      if (section.data && section.data.length > 0) {
        doc.setFontSize(10);
        
        section.data.forEach((row) => {
          // If row is an array, assume it's a table-like format
          if (Array.isArray(row)) {
            doc.text(row[0], 20, yPosition);
            doc.text(row[1], 150, yPosition, { align: "right" });
          } 
          // If row is an object, handle object format
          else if (typeof row === 'object') {
            doc.text(row.item || row.label || '', 20, yPosition);
            doc.text(`GH¢ ${row.amount.toFixed(2)}`, 150, yPosition, { align: "right" });
          }
          
          yPosition += 8;
        });

        // Add some spacing between sections
        yPosition += 10;
      }
    });

    // Save the PDF
    doc.save(fileName);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};