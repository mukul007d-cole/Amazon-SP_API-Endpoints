import SellingPartnerAPI from "amazon-sp-api";
import 'dotenv/config';

const spApi = new SellingPartnerAPI({
    region: "eu",
    refresh_token: process.env.SP_REFRESH_TOKEN,
    credentials: {
      SELLING_PARTNER_APP_CLIENT_ID: process.env.SP_CLIENT_ID,
      SELLING_PARTNER_APP_CLIENT_SECRET: process.env.SP_CLIENT_SECRET
    }
  });


console.log(spApi.endpoints);
