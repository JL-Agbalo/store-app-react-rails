import UpdateContactInfo from "./UpdateContactInfo";
import ChangePassword from "./ChangePassword";
import LinkedAccounts from "./LinkedAccounts";
import DeleteAccount from "./DeleteAccount";

function Account({ user }) {
  console.log("Account:", user);
  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Account Information</h2>
      <div>
        <div className="mb-8">
          <UpdateContactInfo user={user} />
        </div>
        <div className="mb-8">
          <ChangePassword />
        </div>
        <div className="mb-8">
          <LinkedAccounts />
        </div>
        <div className="mb-8">
          <DeleteAccount />
        </div>
      </div>
    </section>
  );
}

export default Account;
