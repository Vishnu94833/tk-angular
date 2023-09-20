const fs = require("fs");
const https = require("https");
const tenantId = "vkuppan01";
const authUrl = `https://${tenantId}-auth.cp.manh.cloud`;
const baseUrl = `https://omni-${tenantId}.cp.manh.cloud`;
const host = `omni-${tenantId}.cp.manh.cloud`
const userId = "ceadmin@globalorg-us.com";
const password = "Password@1";
const accessToken = "b21uaWNvbXBvbmVudC4xLjAuMDpiNHM4cmdUeWc1NVhZTnVu";
const url = `${authUrl}/oauth/token?grant_type=password&username=${userId}&password=${password}`;

// const getAccessToken = async() => {
// 	try {
// 	https.request();
// 	const response = await fetch(`${authUrl}/oauth/token?grant_type=password&username=${userId}&password=${password}`, {
// 	  headers: { Authorization: `Basic ${accessToken}` },
// 	  method: "POST"
// 	})
// 	return response;
// 	} catch (error) {
// 		console.error("Fetch error:", error);
// 	}
// };

function post() {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${accessToken}`,
		},
		timeout: 1000, // in ms
	};

	return new Promise((resolve, reject) => {
		const req = https.request(url, options, (res) => {
			if (res.statusCode < 200 || res.statusCode > 299) {
				return reject(new Error(`HTTP status code ${res.statusCode}`));
			}

			const body = [];
			res.on("data", (chunk) => body.push(chunk));
			res.on("end", () => {
				const resString = Buffer.concat(body).toString("utf8");
				resolve(JSON.parse(resString));
			});
		});

		req.on("error", (err) => {
			reject(err);
		});

		req.on("timeout", () => {
			req.destroy();
			reject(new Error("Request time out"));
		});

		req.end();
	});
}

let PROXY_CONFIG = async () => {
	let response = await post();
	return {
		"*": {
			target: baseUrl,
			secure: false,
			loglevel: "debug",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "/customerengagementfacade/api/",
				"^/customerengagementfacade/api": "/customerengagementfacade/api",
				"^/internal/": "/customerengagementfacade/internal/",
				"^/ping":"/ping"
			},
			headers: {
				Host: host,
				Authorization: `Bearer ${response.access_token}`,
				"Content-Type": "application/json",
				"x-telepresence-intercept-id": `${tenantId}::.*`,
			},
		}
	};
};
PROXY_CONFIG().then((res) => {
	fs.writeFile(
		"./local-proxy.conf.json",
		JSON.stringify(res, null, 4),
		function (err) {
			if (err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		}
	);
});


// module.exports = {getAccessToken,post};


// package.json
// "setup": "node ./setup.js",
//     "local": "npm run setup && node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng serve --port 8081 --proxy-config local-proxy.conf.json",