// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import usePageStore, { PageTypes } from "../../stores/pageStore";

const Navbar = () => {
    const { updatePage } = usePageStore();

    return <header>
        <nav className="bg-[#ACE1AF] border-gray-200 px-4 lg:px-6 py-2.5 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <button onClick={() => { updatePage(PageTypes.HOME) }} className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-[#1A5319] ">TODO app</span>
                </button>
                {/* <button onClick={() => { updatePage(PageTypes.HOME) }}>TaskList</button>
                <button onClick={() => { updatePage(PageTypes.NEW_TASK) }}>New Task </button> */}
                {/* <button onClick={() => { updatePage(PageTypes.NEW_THEME) }}>New Theme </button> */}
                {/* <button onClick={() => { updatePage(prevPage) }}>go back </button> */}
                <div className="flex items-center lg:order-2">
                    <div className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none ">
                        {/* <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn> */}
                    </div>
                    {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button> */}
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                </div>
            </div>
        </nav>
    </header>
}

export default Navbar