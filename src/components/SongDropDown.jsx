import { BsThreeDotsVertical } from "react-icons/bs"
import { Box } from "rebass"

const SongDropDown = ({ children }) => {
  return (
    <Box
      title='options'
      sx={{
        position: "absolute",
        width: 25,
        height: 25,
        top: 1,
        right: 1,
        p: 1,
        m: 2,
        borderRadius: "50%",
        cursor: "pointer",
        ":hover": {
          bg: "ButtonHighlight",
        },
        ":hover .dropdown": {
          display: "block",
        },
      }}
    >
      <BsThreeDotsVertical />
      <Box
        as='div'
        className='dropdown'
        sx={{
          bg: "white",
          boxShadow: "2px 2px 2px #f5f5f5",
          position: "absolute",
          top: 26,
          right: 0,
          display: "none",
          border: "1px solid #eee",
          borderRadius: 4,
          "a:first": {},
          a: {
            borderBottom: "1px solid #eee",
            cursor: "pointer",
            display: "block",
            px: 3,
            py: 1,
            ":hover": {
              bg: "ButtonHighlight",
            },
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
export default SongDropDown
