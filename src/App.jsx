import "./App.css";
import auravant from "../assets/auravant.png";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import MainComponent from "./components/MainComponent";

const App = () => {
  const { t, i18n } = useTranslation();
  //Seteamos el idioma, buscandolo en las configuraciones del usuario en la plataforma
  /* useEffect(() => {
    i18n.changeLanguage(avt.generalData.getUserData().datos.locale);
  }, []); */
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "97vh",
      }}
    >
      <img
        src={auravant}
        className="animated-logo"
        style={{ width: "60px" }}
      />
      <h1 style={{ color: "var(--selected)" }}>{t("welcome")}</h1>
      <MainComponent />
    </div>
  );
};

export default App;
