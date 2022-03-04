import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useDarkmode = () => {

    const darkMode = useSelector((state) => state.darkMode)

    useEffect(() => {

        const html = window.document.documentElement;

        if (!localStorage.getItem("theme")) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark')
            }
            else {

                html.classList.add('light');
                localStorage.setItem('theme', 'light')

            }
        } else {

            const prevTheme = darkMode.isDarkMode ? "light" : "dark";
            html.classList.remove(prevTheme);

            const nextTheme = darkMode.isDarkMode ? "dark" : "light";
            html.classList.add(nextTheme);

        }



    }, [darkMode])

}

export default useDarkmode
