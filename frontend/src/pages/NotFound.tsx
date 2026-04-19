/* NotFound.tsx */
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Not Found | Trakor</title>
            </Helmet>
            <Empty>
                <EmptyHeader>
                    <EmptyTitle className="text-lg font-semibold">
                        404 - Not Found
                    </EmptyTitle>
                    <EmptyDescription>
                        The page you&apos;re looking for doesn&apos;t exist. Please check the URL and try again. Go back to the <Link to="/" className="     hover:underline">home page</Link>.
                    </EmptyDescription>
                </EmptyHeader>
            </Empty>
        </>
    )
}