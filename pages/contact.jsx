import Link from "next/link";

import Image from "next/image";

import pic2 from "../public/images/course-2-2.jpg";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <Image
        src={pic2}
        width="400"
        style={{ marginRight: "20px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default Contact;
