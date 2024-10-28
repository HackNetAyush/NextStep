import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext(null);

const updateMetaThemeColor = (color) => {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", color);
  }
};

export const DarkModeContextProvider = ({ children }) => {
  const [DarkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", DarkMode ? "dark" : "light");
    const themeColor = DarkMode ? "#000000" : "#ffffff";
    updateMetaThemeColor(themeColor);

    document
      .querySelector("body")
      ?.classList.add("text-foreground", "bg-background");

    DarkMode
      ? (document.querySelector("body").classList.add("dark"),
        document.querySelector("body").classList.remove("light"))
      : (document.querySelector("body").classList.remove("dark"),
        document.querySelector("body").classList.add("light"));
  }, [DarkMode]);

  return (
    <DarkModeContext.Provider value={{ DarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
