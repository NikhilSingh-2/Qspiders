<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PaymentForm.aspx.cs" Inherits="PaymentForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Payment Form</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <label for="txtUsername">Username:</label>
            <asp:TextBox ID="txtUsername" runat="server"></asp:TextBox><br />

            <label for="ddlPaymentMode">Payment Mode:</label>
            <asp:DropDownList ID="ddlPaymentMode" runat="server">
                <asp:ListItem Text="Credit Card" Value="Credit Card"></asp:ListItem>
                <asp:ListItem Text="Debit Card" Value="Debit Card"></asp:ListItem>
                <asp:ListItem Text="PayPal" Value="PayPal"></asp:ListItem>
            </asp:DropDownList><br />

            <label for="txtCreditCard">Credit Card:</label>
            <asp:TextBox ID="txtCreditCard" runat="server"></asp:TextBox><br />

            <asp:Button ID="btnValidate" runat="server" Text="Validate" OnClick="btnValidate_Click" />
            <asp:Label ID="lblValidationMessage" runat="server" Text=""></asp:Label>
        </div>
    </form>
</body>
</html>
