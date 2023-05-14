import { Divider, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import peerless_logo from "../../assets/peerless_logo.jpg"
const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Announcement
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src= {peerless_logo}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Importent announcement</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Any importent announcement from peerless can be provided here. 
      </Typography>
      <Divider />
      <Typography color={medium} m="0.5rem 0">
        Any importent announcement from peerless can be provided here. 
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
