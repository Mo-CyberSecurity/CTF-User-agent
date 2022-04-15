const express = require("express"),
  app = express();

const port = process.env.YOUR_PORT || process.env.PORT || 8080;
const flag = "flag{enemy_sister_hacker}";

app.get("/", (req, res) => {
  if (req.get("User-agent") === "enemy_mom_hacker") {
    res.send(flag);
  } else {
    res.clearCookie("token");
    res.set("To-get-flag-agent", "enemy_mom_hacker");
    res.send(`<p style="font-size: 20px"><b>You user-agent:</b> ${req.get("User-Agent")}</p>
  <p style="color: red; text-align: center; font-size: 72px">Failure</p>`);
  }
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});
