"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const RecaptchaProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            scriptProps={{ async: true, defer: true }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
};
