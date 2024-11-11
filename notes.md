# Error Handling (error.tsx)

1. Automatically wrap a route segment and its nested children in a React Error Boundary.
2. Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.
3. Isolate errors to affected segments while keeping the rest of the application functional.
4. Add functionally to attempt tp recover from an error without a full page reload.

# Component Hierarchy

layout.js
template.js
error.js
loading.js
not-found.js
page.js

<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary fallback={<NotFound />}>
                    <Page />
                </ErrorBoundary>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>

# Recovering from error

> To handle errors create a file named error.tsx in the route where we need to handle error.
> It contains error props as well which can ne used to display message or reset the behavior by trying again.
> reset tries to attempt to rerender the ErrorBoundary's contents, if successful the fallback error content is replaced by the rerendered contents from page.tsx.

export default function ErrorBoundary ({error, reset}:
{error : Error;
reset: () => void;
}) {
return <div>contents to display...</div>
}

# Handling error within nested routes

> Errors bubble up to closest error boundary.
> An error.tsx file will cater to errors for all its nested child segments.
> By positioning error.tsx files at different levels in the nested folders of a route, you can achieve a more granular level of error handling.
> The placement of error.tsx file plays a crucial role in determining the scope of error handling allowing for more precise control over which parts of the UI are affected when error occurs.
> Deeper the placement of error.tsx, the more granular is error handling.

# Handling errors within layout

> An error.tsx file will handle errors for all its nested child segments.
> However, there is a nuance when it comes to layout.tsx component within the same segment.
> The error boundary does not catch errors thrown here because its nested inside the layouts component.
> This is because the Layout sits above ErrorBoundary in the component's hierarchy.
> To handle this we need to place the error up the hierarchy to warp the route within ErrorBoundary.
> The placement of error.tsx plays to pivotal role in managing errors within segments of our application.
