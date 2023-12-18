import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Art Pieces</Link>
        </li>
      </ul>
    </Nav>
  );
}
