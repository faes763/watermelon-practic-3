import type { NextConfig } from "next";

const BASE_URL = "https://api.xn----8sbacddqgpqhx0agdhsf7b0loau.xn--p1ai";

const nextConfig: NextConfig = {
	/* config options here */
	env: {
		BASE_URL: BASE_URL,
	},
};

export default nextConfig;
