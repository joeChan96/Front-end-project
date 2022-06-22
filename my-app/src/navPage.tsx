import * as React from "react";
import { useState } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./navPage.css";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        fontSize: "3.5rem",
        fontWeight: "700",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "500",
        height: "100",
        // bgcolor: "#5BC0BE",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function NavPage() {
  const [show, setShow] = useState(true);

  function handleChange() {
    setShow(false);
  }

  const itemData = [
    {
      img: "heritagePhoto/bird.jpg",
      title: "Bed",
    },
    {
      img: "heritagePhoto/teahouse.jpg",
      title: "Tea House",
    },
    {
      img: "heritagePhoto/catholic.jpg",
      title: "Catholic",
    },

    {
      img: "heritagePhoto/kowlooncity.jpg",
      title: "Kowloon City",
    },
    {
      img: "heritagePhoto/cheunghole.jpg",
      title: "Cheung's hole",
    },
    {
      img: "heritagePhoto/hkjaimarket.jpg",
      title: "Aberdeen market",
    },
  ];

  return (
    { show } && (
      <div style={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            pt: 5,
            height: 200,
            // bgcolor: "#5BC0BE",
          }}
        >
          <Item sx={{ pt: 11.5 }}>
            <div>Welcome to</div>
            <div className="logotext">HKYEAH HERITAGE</div>
            <Box sx={{ "& button": { m: 1 } }}>
              <Button
                variant="contained"
                sx={{ width: 250, height: 50 }}
                onClick={handleChange}
              >
                Start to Search
              </Button>
              <Button variant="contained" sx={{ width: 250, height: 50 }}>
                Heritage Info
              </Button>
            </Box>
          </Item>

          <Item>
            <ImageList sx={{ width: 700 }} variant="woven" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={item.img}
                    // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Item>
        </Box>
      </div>
    )
  );
}
