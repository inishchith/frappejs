const sender = require('./sender');
const frappe = require('frappejs');

module.exports = () => {
    frappe.registerMethod({
        method: 'send-mail',
        handler: sender.sendMail
    });
};