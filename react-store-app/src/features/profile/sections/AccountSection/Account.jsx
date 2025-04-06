import React, { useEffect, useState } from "react";
import { getUserDetailsById } from "../../../auth/services/userService";
function Account(userId = 1) {
  // const [userData, setUserDetails] = useState({});
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await getUserDetailsById(userId);
  //       console.log("User Details:", data);
  //       setUserDetails(data);
  //     } catch (error) {
  //       console.error("Error fetching user details:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserDetails();
  // }, [userId]);
  // console.log("User Data:", userData);

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
