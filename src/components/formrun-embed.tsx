"use client";

import Script from "next/script";

export function FormrunEmbed({ formId }: { formId: string }) {
  function onLoad() {
    const fix = () => {
      const iframe = document.querySelector(
        ".formrun-embed iframe"
      ) as HTMLIFrameElement | null;
      if (!iframe) return;
      if (parseInt(iframe.style.height) < 100) {
        iframe.style.minHeight = "800px";
        iframe.style.height = "800px";
      }
    };
    // SDK直後 + 少し待ってから再チェック
    fix();
    setTimeout(fix, 1000);
    setTimeout(fix, 3000);
  }

  return (
    <>
      <div
        className="formrun-embed"
        data-formrun-form={formId}
        data-formrun-redirect="true"
      />
      <Script
        src="https://sdk.form.run/js/v2/embed.js"
        strategy="afterInteractive"
        onLoad={onLoad}
      />
    </>
  );
}
