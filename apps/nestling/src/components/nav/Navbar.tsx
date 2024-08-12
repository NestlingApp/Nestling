import React, { useEffect } from "react";
import { HideOnScroll } from "./HideOnScroll";
import {
  AppBar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { RCAProperty } from "@Data/reatlorca/types";
import { useGetListingsQuery } from "@Services/listing";
import { NListing } from "@Data/nestling/NListing";

interface LoaderDataType {
  listingIds: string[];
  listingId: string;
}

const NavBar = (props: any) => {
  const navigate = useNavigate();
  const { listingIds, listingId } = useLoaderData() as LoaderDataType;

  const [currentListingId, setCurrentListingId] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentListingId(event.target.value);
    navigate(`/listings/${event.target.value}`);
  };

  useEffect(() => {
    if (listingId) {
      setCurrentListingId(listingId);
    }
  }, [listingId]);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Nestling
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex", color: "white" } }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel sx={{ color: "white" }} id="listings">
                  Listings
                </InputLabel>
                <Select
                  labelId="listing-selector-label"
                  id="listing-selector"
                  sx={{ color: "white" }}
                  value={currentListingId}
                  label="Listing"
                  onChange={handleChange}
                >
                  {listingIds.map((id: string) => (
                    <MenuItem key={id} value={id}>
                      {id}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default NavBar;
