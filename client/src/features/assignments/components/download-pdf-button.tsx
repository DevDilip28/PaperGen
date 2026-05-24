"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  fileName: string;
};

export function DownloadPdfButton({ fileName }: Props) {
  const handleDownload = async () => {
    const element = document.getElementById("question-paper");

    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const options = {
      margin: 0.5,

      filename: `${fileName}.pdf`,

      image: {
        type: "jpeg" as const,
        quality: 1,
      },

      html2canvas: {
        scale: 2,
      },

      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait" as const,
      },
    };

    await html2pdf().set(options).from(element).save();
  };

  return (
    <Button onClick={handleDownload} className="h-12">
      <Download className="mr-2 h-4 w-4" />
      Download PDF
    </Button>
  );
}
