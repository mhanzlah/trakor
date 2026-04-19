import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
    return (
        <div className="py-4 flex items-center justify-center h-screen">
            <Spinner className="size-8" />
        </div>
    );
}