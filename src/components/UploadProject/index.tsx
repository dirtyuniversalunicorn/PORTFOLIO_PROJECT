"use client";

import { useState } from "react";
import { FormInput } from "../ContactForm.tsx/FormInput";

export function UploadProject() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  async function handleProjectUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fileInput = form.file as HTMLInputElement;

    if (!fileInput.files?.[0]) return;

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    setLoading(true);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setImageUrl(data.url);
    setLoading(false);
  }

  return (
    <form onSubmit={handleProjectUpload} className="space-y-4">
      <FormInput name="project_title" required placeholder="Project Title" />
      <FormInput
        name="short_description"
        required
        placeholder="Short Description"
      />
      <FormInput
        name="long_descriptione"
        required
        textArea
        placeholder="Long Description"
      />
      <FormInput
        name="technologies_used"
        required
        placeholder="Technologies used"
      />
      <input type="file" name="file" accept="image/*" required />

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: 300 }} />
      )}
    </form>
  );
}
