import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export function Header(){
    const {t, i18n} = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
      }

    return (
        <>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">EvoSoftInventory</NavLink>
                <button className="navbar-toggler" type="button" data-b s-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">{t("navLink1")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/inventaire">{t("navLink2")}</NavLink>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success m-1 active" onClick={()=> changeLanguage("en")}>EN</button>
                        <button className="btn btn-outline-primary m-1" onClick={()=> changeLanguage("fr")}>FR</button>
                    </form>
                </div>
            </div>
            </nav>
        </>
    )
}