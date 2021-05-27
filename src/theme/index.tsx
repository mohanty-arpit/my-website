import {createMuiTheme,responsiveFontSizes} from '@material-ui/core'
import { typography } from "./typography";
import { palette } from "./palette";

export default responsiveFontSizes( createMuiTheme({
typography,
palette
}),{factor:1 })

// he higher the value, the less difference there is between font sizes on small screens. The lower the value, the bigger font sizes for small screens. The value must be greater than 1.