var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.EMAIL_KEY;

const mailer = new SibApiV3Sdk.TransactionalEmailsApi();

export default mailer;

export const createOrderSendEmail = async (payload) => {
  try {
    let { total_price, total_quantity, discount_price, payment_type, product } =
      payload;
    const sender = {
      email: "tkt4219@gmail.com",
      name: "shoppy",
    };
    const receiver = [
      {
        email: "rahuldhin18@gmail.com",
      },
    ];

    await mailer.sendTransacEmail({
      sender,
      to: receiver,
      templateId: 3,
      params: {
        total: total_price,
        discount_price: discount_price,
        total_quantity: total_quantity,
        items: product,
      },
    });
  } catch (error) {
    return next(error);
  }
};
// emailCampaigns.name = "Campaign sent via the API";
// emailCampaigns.subject = "My subject";
// emailCampaigns.sender = {"name": "From name", "email":"myfromemail@mycompany.com"};
// emailCampaigns.type = "classic";

// htmlContent: 'Congratulations! You successfully sent this example campaign via the Brevo API.',

// recipients: {listIds: [2, 7]},

// scheduledAt: '2018-01-01 00:00:01'
// }

// apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
// console.log('API called successfully. Returned data: ' + data);
// }, function(error) {
// console.error(error);
// });
