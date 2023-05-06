import { Footer } from 'flowbite-react';
// import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

function MyFooter() {
    return (
        <Footer bgDark={true}>
            <div className="w-full text-blue-200">
                <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                    <div>
                    <Footer.Title className={`mb-5 font-semibold`} title="COMPANY" />
                        <Footer.LinkGroup className={`gap-4`} col={true}>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                            <Footer.Link href="#">
                                Careers
                            </Footer.Link>
                            <Footer.Link href="#">
                                Brand Center
                            </Footer.Link>
                            <Footer.Link href="#">
                                Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className={`mb-5 font-semibold`} title="HELP CENTER" />
                        <Footer.LinkGroup className={`gap-4`} col={true}>
                            <Footer.Link href="#">
                                Discord Server
                            </Footer.Link>
                            <Footer.Link href="#">
                                Twitter
                            </Footer.Link>
                            <Footer.Link href="#">
                                Facebook
                            </Footer.Link>
                            <Footer.Link href="#">
                                Contact Us
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className={`mb-5 font-semibold`} title="LEGAL" />
                        <Footer.LinkGroup className={`gap-4`} col={true}>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className={`mb-5 font-semibold`} title="DOWNLOAD" />
                        <Footer.LinkGroup className={`gap-4`} col={true}>
                            <Footer.Link href="#">
                                iOS
                            </Footer.Link>
                            <Footer.Link href="#">
                                Android
                            </Footer.Link>
                            <Footer.Link href="#">
                                Windows
                            </Footer.Link>
                            <Footer.Link href="#">
                                MacOS
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
               <div className={`flex flex-col items-center justify-center`}>
                   <p>
                       Copyright © 2023 Sheikha Jawaher Al Qasimi Award for Sports Excellence
                   </p>

               </div>
                {/*<div className=" bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">*/}
                {/*    <Footer.Copyright*/}
                {/*        href="#"*/}
                {/*        by="Flowbite™"*/}
                {/*        year={2022}*/}
                {/*    />*/}
                {/*    <div className="mt-4 flex self-center justify-center space-x-6 sm:mt-0 sm:justify-center">*/}
                {/*        <Footer.Icon*/}
                {/*            href="#"*/}
                {/*            icon={BsFacebook}*/}
                {/*        />*/}
                {/*        <Footer.Icon*/}
                {/*            href="#"*/}
                {/*            icon={BsInstagram}*/}
                {/*        />*/}
                {/*        <Footer.Icon*/}
                {/*            href="#"*/}
                {/*            icon={BsTwitter}*/}
                {/*        />*/}
                {/*        <Footer.Icon*/}
                {/*            href="#"*/}
                {/*            icon={BsGithub}*/}
                {/*        />*/}
                {/*        <Footer.Icon*/}
                {/*            href="#"*/}
                {/*            icon={BsDribbble}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </Footer>
)
}

export default MyFooter;