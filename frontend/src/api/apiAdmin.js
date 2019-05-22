import axios from "axios";
const userUrl = "http://localhost:3010/api/users";

export async function getAdmin(data) {
  const res = await axios.get(userUrl + "/getAdminToVerify", data);
  return res.data;
}
export async function verifyAdmin(data) {
  const res = await axios.post(userUrl + "/admin/addAdmin", data);
  return res.data;
}
