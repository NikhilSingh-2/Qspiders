using System;
using System.Web.UI;

public partial class PaymentForm : Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }

    protected void btnValidate_Click(object sender, EventArgs e)
    {
        string username = txtUsername.Text.Trim();
        string paymentMode = ddlPaymentMode.SelectedValue;
        string creditCard = txtCreditCard.Text.Trim();

        if (string.IsNullOrEmpty(username))
        {
            lblValidationMessage.Text = "Username cannot be empty.";
        }
        else if (string.IsNullOrEmpty(paymentMode))
        {
            lblValidationMessage.Text = "Please select a payment mode.";
        }
        else if (string.IsNullOrEmpty(creditCard) || !IsCreditCardValid(creditCard))
        {
            lblValidationMessage.Text = "Invalid credit card number. It must be a 16-digit number.";
        }
        else
        {
            lblValidationMessage.Text = "Validation successful.";
        }
    }

    private bool IsCreditCardValid(string creditCard)
    {
        // Basic validation for a 16-digit credit card number
        return creditCard.Length == 16 && long.TryParse(creditCard, out _);
    }
}
