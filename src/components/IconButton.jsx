import { css } from "@emotion/react"
import { useTheme } from "emotion-theming"

const IconButton = ({ children, ...props }) => {
  const theme = useTheme()

  return (
    <button
      {...props}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: transparent;
        cursor: pointer;
        padding: 4px;
        margin: 4px;
        font-size: 28px;
        color: ${theme.colors.primary};
        :hover {
          background-color: #eee;
        }
      `}
    >
      {children}
    </button>
  )
}
export default IconButton
