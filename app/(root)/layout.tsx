import React, {ReactNode} from 'react'
import Link from "next/link";
import Image from 'next/image'
import {isAuthenticated} from "@/lib/actions/auth.actions";
import {redirect} from "next/navigation";
const RootLayout = async({ children }:{children: ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated) redirect('/sign-in');
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex item-center gap-2">
                    <Image src="/logo.svg" alt="logo" height={38} width={38} />
                    <h2 className="text-primary-200">PrepWise</h2>
                </Link>
            </nav>
            {children}
        </div>
    )
}
export default RootLayout
