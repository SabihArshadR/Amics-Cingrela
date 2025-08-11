export default function DeleteData() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Request Your Data Deletion</h1>
      <p>
        If you would like to delete your account and all personal data we have
        stored, please follow these steps:
      </p>
      <ol>
        <li>
          Send an email to{" "}
          <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>{" "}
          with the subject <b>"Delete My Data"</b>.
        </li>
        <li>
          Include your full name and the email address associated with your
          account.
        </li>
      </ol>
      <p>
        Your data will be deleted within 7 business days of receiving your
        request.
      </p>
    </div>
  );
}
