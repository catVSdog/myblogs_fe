const path = import("path");

export const entry = "./server_source/app.ts";
export const output = {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
};
