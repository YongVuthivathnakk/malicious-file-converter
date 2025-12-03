import { useEffect } from "react";

export default function DownloadPage() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/files/myfile.pdf"; // path in the public folder
    link.download = "myfile.pdf"; // name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

}