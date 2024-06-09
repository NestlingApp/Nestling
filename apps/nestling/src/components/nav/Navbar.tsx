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

interface LoaderDataType {
  listingIds: string[];
  listing: RCAListing;
}

const NavBar = (props: any) => {
  const navigate = useNavigate();
  const { listingIds, listing } = useLoaderData() as LoaderDataType;

  const [listingId, setCurrentListingId] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentListingId(event.target.value);
    navigate(`/listings/${event.target.value}`);
  };

  useEffect(() => {
    if (listing.MlsNumber) {
      setCurrentListingId(listing.MlsNumber);
    }
  }, [listing.MlsNumber]);

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
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  sx={{ color: "white" }}
                  value={listingId}
                  label="Listing"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
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
