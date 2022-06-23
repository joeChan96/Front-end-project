import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

import heritageInfo from "./heritageInfo";
import { width } from "@mui/system";

const heritageCard: any = heritageInfo.map((heritage) => {
  return (
    <div>
      <Card sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4">
              {heritage.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {heritage.district}
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              color="black"
              component="div"
            ></Typography>
            <br />
            <Button size="small">Learn More</Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, p: 2 }}
          image={heritage.img}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
});

export default function InfoPage() {
  return <div>{heritageCard}</div>;
}
