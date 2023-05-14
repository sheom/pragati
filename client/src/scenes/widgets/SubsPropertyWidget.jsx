import {
  // EditOutlined,
  // DeleteOutlined,
  // AttachFileOutlined,
  // GifBoxOutlined,
  // ImageOutlined,
  // MicOutlined,
  // MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  //Typography,
  //InputBase,
  useTheme,
  //Button,
  //IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
//
import PropertyCard from "components/common/PropertyCard";

//
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import allProperties  from "../../data/properties";

const SubsPropertyWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  //const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const subsidiary = useSelector((state) => state.user.subsidiary);
  //const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  //const mediumMain = palette.neutral.mediumMain;
  //const medium = palette.neutral.medium;
  //
  const filturedProps = allProperties.filter(property => property.subsidiary === subsidiary );
  
  const displayProperties =  ()=>{
    if (filturedProps.length === 0){
      return <h1>No Property is available for this user</h1>
    }else{
      return filturedProps?.map((property) => (
        <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}
        />
    ))
    }
  }

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {displayProperties()}
            </Box>
      </FlexBetween>

      
      {/* {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          
        </Box>
      )} */}

      <Divider sx={{ margin: "1.25rem 0" }} />
    </WidgetWrapper>

  );
};

export default SubsPropertyWidget;
