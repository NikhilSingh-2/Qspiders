using System;
using System.Web.UI;

public partial class BankForm : Page
{
    protected void btnDeposit_Click(object sender, EventArgs e)
    {
        // Validate inputs
        if (string.IsNullOrEmpty(txtName.Text) || string.IsNullOrEmpty(txtAccountNumber.Text) || string.IsNullOrEmpty(txtBalance.Text))
        {
            // Display error message
            // You can use a Label control to display error messages
            return;
        }

        // Convert balance to decimal
        if (!decimal.TryParse(txtBalance.Text, out decimal balance))
        {
            // Display error message
            return;
        }

        // Perform deposit transaction
        // Here you would write code to update the balance in the account with the deposited amount
        // For example:
        // balance += depositedAmount;
    }

    protected void btnWithdraw_Click(object sender, EventArgs e)
    {
        // Validate inputs
        if (string.IsNullOrEmpty(txtName.Text) || string.IsNullOrEmpty(txtAccountNumber.Text) || string.IsNullOrEmpty(txtBalance.Text))
        {
            // Display error message
            return;
        }

        // Convert balance to decimal
        if (!decimal.TryParse(txtBalance.Text, out decimal balance))
        {
            // Display error message
            return;
        }

        // Perform withdrawal transaction
        // Here you would write code to deduct the withdrawal amount from the account balance
        // For example:
        // balance -= withdrawalAmount;
    }
}
