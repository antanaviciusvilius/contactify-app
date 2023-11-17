import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const accentWhiteColor = '#FDFCFF';

const customTheme = createTheme({
  palette: {
    primary: {
      light: accentWhiteColor,
      main: "#1DE9B6",
      dark: "#1DE9B0"
    },
    secondary: {
      light: accentWhiteColor,
      main: colors.blue[500],
      dark: "#1DE9B0"
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: accentWhiteColor,
          },
          '& label': {
            color: accentWhiteColor,
          },
          '& label.Mui-focused': {
            color: accentWhiteColor,
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: accentWhiteColor,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: accentWhiteColor,
            },
            '&:hover fieldset': {
              borderColor: accentWhiteColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: accentWhiteColor,
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: accentWhiteColor,
          '&$checked': {
            color: accentWhiteColor,
          },
        },
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: accentWhiteColor
        }
      }
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          '&.MuiTableSortLabel-root': {
            color: accentWhiteColor,
          },
          '&.MuiTableSortLabel-root:hover': {
            color: accentWhiteColor,
          },
          '&.Mui-active': {
            color: accentWhiteColor,
          },
          '&.Mui-active .MuiTableSortLabel-icon': {
            color: accentWhiteColor,
          },
        }
      }
    }
  }
});

export default customTheme;