import React from 'react';
import { Document, Page } from 'react-pdf';

function Resume () {
const pdfURL = './resume.pdf';
return (
 <div>
  <Document file={pdfURL}>
    <Page pageNumber={1} />
  </Document>
 </div>
 );
};
export default Resume;