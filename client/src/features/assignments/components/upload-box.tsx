import { UploadCloud } from "lucide-react";

export function UploadBox() {
  return (
    <div className="rounded-[32px] border-2 border-dashed border-zinc-300 bg-zinc-50 p-10 text-center">
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
          <UploadCloud className="h-8 w-8 text-zinc-500" />
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold">Upload Reference Material</h3>

      <p className="mb-4 text-sm text-zinc-500">
        Drag & drop files here or click to browse
      </p>

      <input type="file" className="text-sm" />
    </div>
  );
}
