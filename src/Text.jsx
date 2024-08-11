import { useContext } from "react"
import { ThemeContext } from "./context"

export const Text = () => {
    const theme = useContext(ThemeContext)

    return (
        <p>o nome dentro do tema (CONTEXTO) é: {theme.name}</p>
    )
}