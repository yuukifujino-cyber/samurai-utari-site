"use client";

import { useEffect } from "react";

const SDK_URL = "https://sdk.form.run/js/v2/embed.js";

export function FormrunEmbed({ formId }: { formId: string }) {
  useEffect(() => {
    // 既存のSDKスクリプトを毎回削除して再注入（クライアントサイドナビゲーション対策）
    const old = document.querySelector(`script[src="${SDK_URL}"]`);
    if (old) old.remove();

    const script = document.createElement("script");
    script.src = SDK_URL;
    script.onload = () => {
      const fix = () => {
        const iframe = document.querySelector(
          ".formrun-embed iframe"
        ) as HTMLIFrameElement | null;
        if (!iframe) return;
        if (!iframe.style.height || parseInt(iframe.style.height) < 100) {
          iframe.style.height = "800px";
        }
      };
      fix();
      setTimeout(fix, 500);
      setTimeout(fix, 2000);
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className="formrun-embed"
      data-formrun-form={formId}
      data-formrun-redirect="true"
    />
  );
}
