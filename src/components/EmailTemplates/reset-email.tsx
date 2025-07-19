// import * as React from "react";

// interface ResetPasswordTemplateProps {
//   firstName: string;
//   resetUrl: string;
// }

// export const ResetPasswordTemplate: React.FC<
//   Readonly<ResetPasswordTemplateProps>
// > = ({ firstName, resetUrl }) => (
//   <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//     <h1>Hello, {firstName}!</h1>
//     <p>
//       It looks like you requested a password reset. Click the link below to
//       reset your password
//     </p>
//     <a href={resetUrl} style={{ color: "#007bff", textDecoration: "none" }}>
//       Reset your password
//     </a>
//     <p>If you did not request a password reset, please ignore this email.</p>
//     <p>Thank you</p>
//   </div>
// );

import * as React from "react";

interface ResetPasswordTemplateProps {
  firstName: string;
  resetUrl: string;
}

export const ResetPasswordTemplate: React.FC<
  Readonly<ResetPasswordTemplateProps>
> = ({ firstName, resetUrl }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      padding: "40px 0",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>
        Hello {firstName},
      </h2>
      <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
        We have received a request to reset the password associated with your
        account. If you made this request, please click the button below to
        proceed with resetting your password.
      </p>
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <a
          href={resetUrl}
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Reset Password
        </a>
      </div>
      <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
        If you did not request this change, you can safely ignore this email.
        Your account will remain secure.
      </p>
      <p style={{ fontSize: "16px", color: "#555", marginTop: "30px" }}>
        Kind regards,
        <br />
        The Moleculyst Team
      </p>
    </div>
  </div>
);
