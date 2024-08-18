
import './App.css';

import VideoFeed from './VideoFeed';
import { Box } from "@mui/system";
import DelayedTime from './DelayedTime'; 

function App() {
  const currentTime = new Date();
  const isNight = currentTime.getHours() >= 18 || currentTime.getHours() < 6;

  return (
    <div>
    <Box>
    <DelayedTime />
  </Box>
    <Box sx={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", display: "flex", backgroundColor: isNight ? "black" : "cream" }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" />
      </Box>
    </Box>
    </div>
  );
}

export default App;
