import Link from "next/link";
import Image from "next/image";

import pic1 from "../public/images/course-2-1.jpg";

const about = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Image
        src={pic1}
        width="400"
        style={{ marginRight: "20px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default about;
