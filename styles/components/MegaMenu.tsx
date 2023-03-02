import { ReactElement } from 'react'
import Image from "next/image";
import { Button } from './Button';
import 'tw-elements';

export const MegaMenu = (): ReactElement => {
    return (
        <>
            <a
                className={`flex px-5 py-5 border-secondary-10 border-b hover:bg-secondary-10 md:hover:bg-transparent md:px-0 md:py-0 md:border-none font-semibold uppercase duration-300 text-sm md:hover:text-secondary-20`}
                href="#"
                data-te-ripple-init
                data-te-ripple-color="light"
                type="button"
                id="dropdownMenuButtonU"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-nav-link-ref
            >serviços
                <span className="ml-2 w-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </a>
            <div
                className="absolute top-full z-[1000] mt-0 hidden max-w-5xl  border-none bg-zinc-100 bg-clip-padding text-neutral-700 shadow-lg [&[data-te-dropdown-show]]:block rounded-lg"
                aria-labelledby="dropdownMenuButtonU"
                data-te-dropdown-menu-ref>
                <div className="px-6 py-5 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <h4 className="block w-full pt-2 font-semibold uppercase">
                                incorporação
                            </h4>
                            <div
                                className="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                                    className="w-full rounded-md shadow-lg dark:shadow-black/10"
                                    alt="Louvre" />
                            </div>
                            <h5 className="mb-2 text-xl font-semibold">
                                This is title of the news
                            </h5>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Odit, iste aliquid. Sed id nihil magni, sint
                                vero provident esse numquam perferendis ducimus
                                dicta adipisci iusto nam temporibus modi animi
                                laboriosam.
                            </p>
                            <Button color="bg-primary-10" hover="hover:bg-primary-20" value="saiba mais" />
                        </div>
                        <div>
                            <h4 className="block w-full pt-2 font-semibold uppercase">
                                construção civíl
                            </h4>
                            <div
                                className="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/fluid/city/011.webp"
                                    className="w-full rounded-md shadow-lg dark:shadow-black/10"
                                    alt="Louvre" />
                            </div>
                            <h5 className="mb-2 text-xl font-semibold">
                                This is title of the news
                            </h5>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Odit, iste aliquid. Sed id nihil magni, sint
                                vero provident esse numquam perferendis ducimus
                                dicta adipisci iusto nam temporibus modi animi
                                laboriosam.
                            </p>
                            <Button color="bg-primary-10" hover="hover:bg-primary-20" value="saiba mais" />
                        </div>
                        <div>
                            <h4 className="block w-full pt-2 font-semibold uppercase">
                                private equity
                            </h4>
                            <div
                                className="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/fluid/city/018.webp"
                                    className="w-full rounded-md shadow-lg dark:shadow-black/10"
                                    alt="Louvre" />
                            </div>
                            <h5 className="mb-2 text-xl font-semibold">
                                This is title of the news
                            </h5>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Odit, iste aliquid. Sed id nihil magni, sint
                                vero provident esse numquam perferendis ducimus
                                dicta adipisci iusto nam temporibus modi animi
                                laboriosam.
                            </p>
                            <Button color="bg-primary-10" hover="hover:bg-primary-20" value="saiba mais" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}