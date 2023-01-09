import colors from "./colors";
export default {
  colors,
  headerText: {
    color: colors.primary,
    // fontSize: 20,
    // fontWeight: 700,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  } as React.CSSProperties,
  text: {
    color: colors.secondary,
    fontSize: 16,
  }
};
