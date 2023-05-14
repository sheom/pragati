// import {
//   EditOutlined,
//   DeleteOutlined,
//   AttachFileOutlined,
//   GifBoxOutlined,
//   ImageOutlined,
//   MicOutlined,
//   MoreHorizOutlined,
// } from "@mui/icons-material";
import {
  //Box,
  Divider,
  //Typography,
  //InputBase,
  //useTheme,
  //Button,
  //IconButton,
  //useMediaQuery,
  Button,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
//
import PropertyDetailsCard from "components/common/PropertyDetailsCard";
import PropertyGraphWidget from "scenes/widgets/PropertyGraphWidget";

//
//import { useState } from "react";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import { setPosts } from "state";
import allProperties from "data/properties";

const PropertyWidget = ({ propertyId }) => {
  //const dispatch = useDispatch();
  //const [isImage, setIsImage] = useState(false);
  //const [image, setImage] = useState(null);
  //const [post, setPost] = useState("");
  //const { palette } = useTheme();
  //const { _id } = useSelector((state) => state.user);
  //const token = useSelector((state) => state.token);
  const subsidiary = useSelector((state) => state.user.subsidiary);
  //const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  //const mediumMain = palette.neutral.mediumMain;
  //const medium = palette.neutral.medium;
  const navigate = useNavigate();

  //
  //
  const filturedProperty = allProperties.filter(property => property._id === propertyId );

  const checkMapping = ()=>{
    if(filturedProperty[0].subsidiary !== subsidiary ){
      return <h1>You are not authorised to view this property</h1>
    }else{
      return (
        <>
            <PropertyDetailsCard
                key={filturedProperty[0]._id}
                id={filturedProperty[0]._id}
                title={filturedProperty[0].title}
                description = {filturedProperty[0].description }
                location={filturedProperty[0].location}
                photo={filturedProperty[0].photo}
            />
          <Divider sx={{ margin: "1.25rem 0" }} />
          <FlexBetween gap="1rem" mb="0.5rem">
            <Button variant="text"
              onClick={() => navigate(`/property/budget/add/${propertyId}`)}
            >
              Add Budget Data
            </Button>
            <Button variant="text" >Add Actual Data</Button>
          </FlexBetween>
            
          <Divider sx={{ margin: "1.25rem 0" }} />
          <box >
           <PropertyGraphWidget propertyId={propertyId} />
          </box>
        </>
      );
    }
  }

  return (
    <WidgetWrapper>
      { checkMapping() }
    </WidgetWrapper>
  );
};

export default PropertyWidget;
