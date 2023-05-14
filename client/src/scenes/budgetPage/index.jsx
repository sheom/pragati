import { Box, useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider"
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
//import FriendListWidget from "scenes/widgets/FriendListWidget";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//
//
import allProperties from "data/properties";
import WidgetWrapper from "components/WidgetWrapper";
//
import HotelTargetFormWidget from "../widgets/HotelTargetFormWidget"
import PropertyDetailsCard from "components/common/PropertyDetailsCard";
import HospitalTargetFormWidget from "scenes/widgets/HospitalTargetFormWidget";

const BudgetPage = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  //
  //
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const subsidiary = useSelector((state) => state.user.subsidiary);
  //
  const filturedProperty = allProperties.filter(property => property._id === propertyId );

  const checkMapping = ()=>{
    if(filturedProperty[0].subsidiary === subsidiary ){
      let selectedWidget
      if (subsidiary === "Hotel"){
        selectedWidget = <HotelTargetFormWidget propertyId={propertyId} />
      }else if (subsidiary === "Hospital"){
        selectedWidget = <HospitalTargetFormWidget propertyId={propertyId} />
      }

      return(
        <>
           <PropertyDetailsCard
                key={filturedProperty[0]._id}
                id={filturedProperty[0]._id}
                title={filturedProperty[0].title}
                location={filturedProperty[0].location}
                photo={filturedProperty[0].photo}
            />
          <Divider sx={{ margin: "1.25rem 0" }} />
          { selectedWidget }
        </>
        )
    }else{
      return (
        <>
          <h1>You are Not Authorised to view this page.</h1>
        </>
      );
    }
  }

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="1rem 3%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "20%" : undefined}>
          <UserWidget userId={_id}  />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "60%" : undefined}
          mt={isNonMobileScreens ? undefined : "1rem"}
          justifyContent="space-between"
        >
          <WidgetWrapper>
          { checkMapping() }
          </WidgetWrapper>
        </Box>
        
        {isNonMobileScreens && (
          <Box flexBasis="20%">
            <AdvertWidget />
            <Box />
            {/* <FriendListWidget userId={_id} /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BudgetPage;
