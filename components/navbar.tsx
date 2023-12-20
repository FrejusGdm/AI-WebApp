import {Button} from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

import {Menu} from "lucide-react"
import MobileSidebar from "@/components/mobile-sidebar";
const NavBar = ()=> {
    return(
        <div className="felx items-center p-4">
      <MobileSidebar />
        <div className="flex w-full justify-end">
            <UserButton />

        </div>


        </div>

        );
}

export default NavBar;