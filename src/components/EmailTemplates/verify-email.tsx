// import * as React from "react";

// interface VerifyEmailTemplateProps {
//   firstName: string;
//   verificationUrl: string;
// }

// export const VerifyEmailTemplate: React.FC<
//   Readonly<VerifyEmailTemplateProps>
// > = ({ firstName, verificationUrl }) => (
//   <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//     <h1>Welcome, {firstName}!</h1>
//     <p>
//       Thanks for signing up! Please verify your email address by clicking the
//       link below:
//     </p>
//     <a
//       href={verificationUrl}
//       style={{ color: "#007bff", textDecoration: "none" }}
//     >
//       Verify your email
//     </a>
//     <p>If you did not sign up for this account, please ignore this email.</p>
//     <p>Thank you!</p>
//   </div>
// );

import * as React from "react";

interface VerifyEmailTemplateProps {
  firstName: string;
  verificationUrl: string;
}

export const VerifyEmailTemplate: React.FC<
  Readonly<VerifyEmailTemplateProps>
> = ({ firstName, verificationUrl }) => (
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
        Welcome to Moleculyst, {firstName}!
      </h2>
      <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
        Thank you for creating an account with Moleculyst. To complete your
        registration, please confirm your email address by clicking the button
        below.
      </p>
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <a
          href={verificationUrl}
          style={{
            display: "inline-block",
            backgroundColor: "#28a745",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Verify Email Address
        </a>
      </div>
      <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
        If you did not sign up for this account, no further action is required.
        This message can safely be ignored.
      </p>
      <p style={{ fontSize: "16px", color: "#555", marginTop: "30px" }}>
        Best regards,
        <br />
        The Moleculyst Team
      </p>
    </div>
  </div>
);
