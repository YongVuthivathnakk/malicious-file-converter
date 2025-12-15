export const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/File_Converter.exe";
    link.download = "Fule_Converter.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }