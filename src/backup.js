function ExportExample () {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);
  
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, { paperSize: "A4" });
  }

  return (
    <div className="app-content">
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div ref={contentArea}>
          <h1>KendoReact PDF Processing</h1>
          {/* <img src={kendoka} alt="Kendo UI Kendoka" /> */}
          <p>This is an example of text that may be <span className="neat-style">styled</span></p>
          <div className="button-area">
            <button primary={true} onClick={handleExportWithComponent}>Export with Component</button>
            <button onClick={handleExportWithFunction}>Export with Method</button>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}

export default ExportExample;
