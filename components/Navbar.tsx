import { ModeToggle } from "@/components/ui/theme-button";
import { useTheme } from "next-themes";
export function Navbar() {     
    return (
        <div className="w-full h-16 bg-primary/50 backdrop-blur-sm  flex justify-center border-b border-primary/50 rounded-lg shadow-md shadow-primary/50 dark:bg-primary/50 dark:backdrop-blur-sm dark:border-primary/50 dark:shadow-primary/50"> 
            
            <div className="flex items-center justify-between w-full ">
                <h1 className="text-2xl font-bold text-primary/80 p-4">K3YG3N</h1>
            </div>
            <div className="flex items-center justify-end p-4 w-full">
                <ModeToggle/>
            </div>
        </div>
    )
}