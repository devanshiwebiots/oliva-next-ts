"use client";
import Footer from "@/Layout/Footer/Footer";
import Header from "@/Layout/Header/Header";
import TapTop from "@/Layout/TapTop/TapTop";
import { SideBar } from "@/Layout/SideBar/SideBar";
import { ToastContainer } from "react-toastify";
import ThemeCustomizer from "@/Layout/ThemeCustomizer/ThemeCustomizer";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useEffect } from "react";
import { setSideBarToggle } from "@/Redux/Reducers/LayoutSlice";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import ConfigDB from "@/Config/ThemeConfig";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const compactSidebar = () => {
      let windowWidth = window.innerWidth;
      if (layout === "compact-wrapper") {
        if (windowWidth < 1200) {
          dispatch(setSideBarToggle(true));
        } else {
          dispatch(setSideBarToggle(false));
        }
      } else if (layout === "horizontal-wrapper") {
        if (windowWidth < 992) {
          dispatch(setSideBarToggle(true));
          dispatch(setLayout("compact-wrapper"));
        } else {
          dispatch(setSideBarToggle(false));
          dispatch(setLayout(ConfigDB.settings.layout_class));
        }
      }
    };
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [dispatch, layout]);

  return (
    <>
      <div className={`page-wrapper ${layout}`} id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <SideBar />
          <div className="page-body">{children}</div>
          <Footer />
        </div>
      </div>
      <ThemeCustomizer />
      <TapTop />
      <ToastContainer />
    </>
  );
}
