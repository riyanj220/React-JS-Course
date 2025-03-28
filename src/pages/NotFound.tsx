import { useRouteError } from "react-router-dom";


export default function NotFoundPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = useRouteError() as any;
    console.log(error);

    return(
        <>
            <div id="error-page" >
                <h1>Oops! </h1>
                <p>An error occurred while trying to access this page.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}