export const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/test-file.txt";
    link.download = "test-file.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }