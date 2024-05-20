import { Link } from "react-router-dom";
import { Wrapper } from "../components/common";

export default function PageNotFound() {

    return (
        <Wrapper>
            <div className="py-10">
                <div className="text-center">
                    <p className="text-base font-semibold text-gray-600">404</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-600 sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        Sorry, we couldn&apos:t find the page you&apos;re looking for.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-x-3">
                        <Link
                            to={"/"}
                            className="inline-flex items-center rounded-md border border-primary-600 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                        >
                            Go back
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
