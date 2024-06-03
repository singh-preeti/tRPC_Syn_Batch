import Image from "next/image";
import {NAV_ITEMS} from "@/app/components/Nav/constant";
import lighting from "@/public/lightning.png";
export function Nav(){
    return(
        <div>
            <Image src={lighting} alt="logo" className="w-40" />

            <ul>
                {NAV_ITEMS.map((navItem) => (
                    <li>{navItem.category}</li>
                ))}
            </ul>
        </div>
    );
}
