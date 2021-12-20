export default {
  testDir: "build",
  reporter: [
    ["list"],
    [
      "html",
      {
        open: "never",
        outputFolder: "results",
      },
    ],
  ],
};
