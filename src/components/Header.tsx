import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-12">
        <Link href="/">
          <a>ABlog</a>
        </Link>
        {/* <div>Link</div> */}
        <div>
          <Link href="/">
            <a>AboutMe</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
