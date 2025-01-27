import type { Metadata } from "next";
import "../../src/index.scss";
import NoSsr from "@/utils/NoSsr";
import MainProvider from "./MainProvider";
import { Poppins, Roboto } from "next/font/google";
import { detectLanguage } from "./i18n/server";
import { I18nProvider } from "./i18n/i18n-context";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth";
import { authoption } from "./api/auth/[...nextauth]/authOption";
import SessionWrapper from "@/CommonComponent/SessionWrapper";
import { CustomToaster } from "@/utils/Toaster";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oliva - Premium Admin Template",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lng = await detectLanguage();
  const session = await getServerSession(authoption);

  return (
    <I18nProvider language={lng}>
      <html lang='en'>
        <head>
          <link rel='icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='shortcut icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0' async></script>
        </head>
        <body suppressHydrationWarning={true} className={poppins.className || roboto.className}>
          <NoSsr>
            <SessionWrapper session={session}>
              <MainProvider>
                <NextTopLoader color='#008dab' showSpinner={false} />
                {children}
                <CustomToaster />
              </MainProvider>
            </SessionWrapper>
          </NoSsr>
        </body>
      </html>
    </I18nProvider>
  );
}
